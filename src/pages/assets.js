import React, { Fragment, Component } from "react";
import styled from "react-emotion";
import { Page } from "../components/styles";
import Layout from "../components/layout";
import { auth, firestore, google, storage } from "../utils/firebase";
import createUser from "../utils/createUser";
import FileExplorer from "../components/fileExplorer";

const Button = styled("button")`
  text-decoration: none;
  color: #b99bd8;
  background-color: transparent;
  transition: background-color 0.3s ease;
  margin-top: 5px;
  &:visited {
    color: #b99bd8;
  }
  &:hover {
    text-decoration: none;
    background-color: #6b5483;
  }
  border: solid 1px #b99bd8;
  border-radius: 5px;
  padding: 2px 15px;
`;

const Uploading = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const storageRef = storage.ref();
class RemoteFiles extends Component {
  state = { folders: [], objects: [] };
  async componentDidMount() {
    firestore.collection("folders").onSnapshot(snapshot => {
      this.setState({
        folders: snapshot.docs.map(d => {
          return {
            ...d.data(),

            id: d.id
          };
        })
      });
    });
    firestore.collection("objects").onSnapshot(async snapshot => {
      this.setState({
        objects: await Promise.all(
          snapshot.docs.map(async d => {
            const metadata = await storageRef.root
              .child(`objects/${d.id}`)
              .getMetadata();
            return {
              ...metadata,
              ...d.data(),
              id: d.id
            };
          })
        )
      });
    });
  }
  createFolder = ({ currentDirectory }) => {
    let name = prompt("What is the name of the folder?");
    if (name) {
      const dir = currentDirectory === "/" ? "" : currentDirectory;
      firestore.collection("folders").add({
        name,
        folderPath: currentDirectory,
        fullPath: `${dir}/${name}`
      });
    }
  };
  removeFolder = ({ id }, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      window.confirm(
        "Are you sure you want to remove this folder? This will permenantly delete all of the files inside the folder."
      )
    ) {
      firestore
        .collection("folders")
        .doc(id)
        .delete();
    }
  };
  upload = ({ event, currentDirectory }) => {
    const maxSize = 5 * 1024 * 1024; // 5 MB
    const files = [];
    const tooBig = [];
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i].size <= maxSize) {
        files.push(event.target.files[i]);
      } else {
        tooBig.push(event.target.files[i]);
      }
    }
    if (tooBig.length > 0) {
      window.alert(
        `${
          tooBig.length
        } files are too big to upload. Files must be less than 5MB.`
      );
    }
    if (files.length === 0) return;
    if (files.length > 1)
      return this.doMassUpload(files, null, currentDirectory);
    const name = window.prompt(
      "What would you like to name the uploaded file?",
      files[0].name
    );
    if (name) {
      this.doMassUpload(files, name, currentDirectory);
    }
  };
  doMassUpload = async (files, name, currentDirectory) => {
    this.setState({ uploading: true });
    const ref = firestore.collection("objects");
    const batch = firestore.batch();
    await Promise.all(
      files.map(async file => {
        const id = ref.doc().id;
        const key = `objects/${id}`;
        await storageRef.child(key).put(file);
        const storedFile = storageRef.child(key);
        const object = {
          folderPath: currentDirectory,
          fullPath: `${currentDirectory}/${name || file.name}`,
          name: name || file.name,
          url: await storedFile.getDownloadURL()
        };

        return batch.set(ref.doc(id), object);
      })
    );
    await batch.commit();
    this.setState({ uploading: false });
  };
  render() {
    const { folders, objects, uploading } = this.state;
    const mergedFolders = folders.map(f => ({
      ...f,
      objects: objects.filter(o => o.folderPath === f.fullPath)
    }));
    console.log(objects);
    return (
      <Fragment>
        {uploading && <Uploading>Uploading...</Uploading>}
        <FileExplorer
          assetFolders={mergedFolders}
          admin
          createFolder={this.createFolder}
          removeFolder={this.removeFolder}
          massUpload={this.upload}
        />
      </Fragment>
    );
  }
}

class Assets extends Component {
  state = {
    loading: true
  };
  componentDidMount = async () => {
    auth.onAuthStateChanged(user => {
      this.setState({ user, loading: false });
    });
    firestore.collection("users").onSnapshot(snapshot => {
      this.setState({
        users: snapshot.docs.map(d => ({
          ...d.data(),
          id: d.id
        }))
      });
    });
  };
  signIn = provider => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        createUser(result).then(() => {
          this.setState({ signIn: false });
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  render() {
    const { loading, signIn } = this.state;

    return (
      <Layout>
        <div className={`outerContainer `}>
          <Page>
            <h1>Thorium Emporium</h1>
            <p>Asset Library</p>
            {signIn && <div>Signing in...</div>}
            {(() => {
              if (auth && auth.currentUser) {
                return <RemoteFiles />;
              }
              if (loading) return <div>Loading...</div>;
              return (
                <Button onClick={() => this.signIn(google)}>
                  Sign In to View Assets
                </Button>
              );
            })()}
          </Page>
        </div>
      </Layout>
    );
  }
}
export default Assets;
