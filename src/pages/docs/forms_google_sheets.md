---
title: Survey Forms Google Sheets Connection
category: docs
subcategory: Config
---

Survey forms can be connected directly to Google Sheets to make it easier to
perform calculations on survey form data.

You’ll need to connect Thorium to a Google account with write access to the
sheet. Do that from the ’Settings’ page in Thorium.

![Settings Page](/img/google-sheets-1.jpg)

Clicking the ‘Connect Google Sheets’ will take you to a typical Google
Permissions screen. Choose your account and accept the permissions requests.

![Permissions](/img/google-sheets-2.jpg)

It will then give you a generated code and tell you to paste it into Thorium.

![Code](/img/google-sheets-3.jpg)

On the Thorium settings screen, you’ll notice that the button has turned into a
text field. That’s where you paste in the code.

![Code Paste](/img/google-sheets-4.jpg)

Once you’ve pasted it in, it should show that you’ve connected, along with the
email address that is connected.

![Code Paste](/img/google-sheets-5.jpg)

Once you’ve connected to Google Sheets, a new option will be available for you
on the Survey Creation screen. It will let you type in the name of the Google
Spreadsheet and the sheet on that spreadsheet that you want your survey results
to go to.

![Code Paste](/img/google-sheets-6.jpg)

Make sure whatever sheet you choose is blank before sending any survey
responses. It checks to see if the first row of the sheet is blank when it sends
responses. If it is blank, then it sends the headers. Otherwise (regardless of
what the first row is), it just sends the survey results.

Also, it sends the survey results as soon as the crew submits them. No action is
necessary on the Flight Director’s part.

Survey responses will have the following fields by default:

- Timestamp
- Name
- Simulator
- Station
- Client
- Mission

That should be helpful for making it unnecessary to type those in manually.

After those fields, it displays whatever fields you’ve entered in your survey
form in the order that you entered them.
