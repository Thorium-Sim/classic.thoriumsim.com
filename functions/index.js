const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const { firestore, storage } = require("./helpers/firebase");

// // Configure the email transport using the default SMTP transport and a GMail account.
const gmailEmail = functions.config().gmail
  ? functions.config().gmail.email
  : "";
const gmailPassword = functions.config().gmail
  ? functions.config().gmail.password
  : "";
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.serviceRequest = functions.https.onRequest((request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const { body, method } = request;
  if (method !== "POST") return response.send("Invalid Method");
  const { name, contact, location, priority, type, description } = body;
  // Sends an email.
  const mailOptions = {
    from: `Thorium <noreply@thoriumsim.com>`,
    to: "Alex Anderson <alexanderson1993@gmail.com>"
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `New Service Request From ${name}!`;
  mailOptions.html = `<p>Hey Alex!</p>
  <br />
  <p>There is a new service request that came in at ${new Date().toLocaleString()}. Here are the details.</p>
  
  <ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Contact:</strong> ${contact}</li>
    <li><strong>Location:</strong> ${location}</li>
    <li><strong>Priority:</strong> ${priority}</li>
    <li><strong>Type:</strong> ${type}</li>
    <li><strong>Description:</strong> ${description}</li>
  </ul>
  
  <p>The Trusty Thorium Bot</p>`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return response.send("Done");
  });
});

exports.assets = functions.https.onRequest((request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.header("Content-Type", "application/json");

  if (request.method !== "GET")
    return response.send(JSON.stringify({ error: "Invalid Method" }));
  Promise.all([
    firestore
      .collection("folders")
      .get()
      .then(res => {
        console.log("Got Folders");

        return res.docs.map(d => {
          const data = d.data();
          return Object.assign({}, data, { id: d.id });
        });
      }),
    firestore
      .collection("objects")
      .get()
      .then(res => {
        console.log("Got Objects");
        return Promise.all(
          res.docs.map(d => {
            return storage
              .bucket()
              .file(`objects/${d.id}`)
              .getMetadata()
              .then(metadata => {
                return Object.assign(
                  {},
                  {
                    contentType: metadata[0].contentType
                  },
                  d.data(),
                  { id: d.id }
                );
              });
          })
        );
      })
  ])
    .then(([folders, objects]) => {
      const mergedFolders = folders.map(f =>
        Object.assign(f, {
          objects: objects.filter(o => o.folderPath === f.fullPath)
        })
      );
      return response.end(JSON.stringify(mergedFolders));
    })
    .catch(error => {
      console.error(error);
      return response.end(JSON.stringify({ error: error.message }));
    });
});
