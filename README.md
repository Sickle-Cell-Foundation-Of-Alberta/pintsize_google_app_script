**_Last updated date: Jul 09,2021_**

## Setup ##

-- Please follow the details below as they will be required to have the program run successfully. --

-- The intention of this program is to sync Google Sheets to a Cloud Firestore Database. --


## Installation Guide ##

**Realtime database:**
The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime.
Please take note of your database URL here. It should look something similar to https://xxxx-xxxx-xxxx-xxxx.firebaseio.com/

**Google Spreadsheet:**
Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite offered by Google.
It's important to follow the format demonstrated in the Google sheet. Each sheet must be constructed with an ID column in an incremental value. The desired data can be included in each row based on it's unique ID. 

**Apps Script project:**
Apps Script is a coding platform in G Suite that can be used to build simple applications on top of existing apps such as Sheets, Docs, Forms, etc.
In the Google sheets menu, go to "Tools" > "Script editor". This create an AppScript project linked to the spreadsheet that allows us to add custom logic to it. The project only contains a script called Code.gs Replace the Code.gs with the snipped of our Code.gs
In the Sheets menu, go to "View" > "Script editor". This show you the AppScript project's manifest, called appscript.json.
Replace the appscript.json content with the snipped of our appsript.json

**Start the sync:**
Enable Sheets API in the Firebase project
In the menu, go to Run > Run function > initialize
