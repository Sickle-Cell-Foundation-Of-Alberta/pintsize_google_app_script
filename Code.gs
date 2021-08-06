/**
* Copyright 2019 Google LLC.
* SPDX-License-Identifier: Apache-2.0
*/


function getFirestore() {
    const email = "masked";
    const key = "masked";
    const projectId = "masked";
 return FirestoreApp.getFirestore(email, key, projectId); 
  }


// A custom function that delete collections's of documents
function importFromFirestore() {
  // 1. Get a Firestore insance
  const firestore = getFirestore(); 
  
  // 2. Get a collection from Firestore
  const allDocuments = firestore.getDocuments('Awareness').map(function(document) {
    return document.obj;
  });
  
  // 3. Get the first document from the collection
  const first = allDocuments[0];
  const columns = Object.keys(first);
  
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(columns);
  
  // 4. Turn each document into an array to be deleted to the sheet
  allDocuments.forEach(function(document) {
    const row = columns.map(function(column) {
      return document[column];
    });
    firestore.deleteDocument("FirstCollection/" + row);

  });
}



function AwarenessFunc() {

    var firestore = getFirestore();

    // A custom function that delete collections's of documents
    const allDocuments = firestore.getDocuments("Awareness");
    for (var index in allDocuments){
      var documentID = (allDocuments[index]['name'])
      var result = documentID.substring(documentID.lastIndexOf("/") + 1);
      firestore.deleteDocument("Awareness/"+result);

    };
       
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "Awareness";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};

        console.log(allDocuments);        
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
        
        firestore.createDocument("Awareness",data);
 
      }
     
   }
 }






function CBSDonationFunc() {
  
    var firestore = getFirestore();

    // A custom function that delete collections's of documents
    const allDocuments = firestore.getDocuments("BloodDonationData");
    for (var index in allDocuments){
      var documentID = (allDocuments[index]['name'])
      var result = documentID.substring(documentID.lastIndexOf("/") + 1);
      firestore.deleteDocument("BloodDonationData/"+result);

    };
     
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "Cbs_Donoation_Data";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};

 
        data.id = sourceData[i][0];
        data.City = sourceData[i][1];
        data.Country = sourceData[i][2];
        data.donorCentre = sourceData[i][3];
        data.Location = sourceData[i][4];
        data.Address = sourceData[i][5];
        data.nextAvailableDate = sourceData[i][6];
     
        firestore.createDocument("BloodDonationData/",data);
 
      }
     
   }
 }




function dailyTipsFunc() {

    var firestore = getFirestore();

    // A custom function that delete collections's of documents
    const allDocuments = firestore.getDocuments("DailyTips");
    for (var index in allDocuments){
      var documentID = (allDocuments[index]['name'])
      var result = documentID.substring(documentID.lastIndexOf("/") + 1);
      firestore.deleteDocument("DailyTips/"+result);

    };
     
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "DailyTips";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};
        
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
     
        firestore.createDocument("DailyTips/",data);
 
      }
     
   }
 }



function MythsFactsFunc() {

    var firestore = getFirestore();

    // A custom function that delete collections's of documents
    const allDocuments = firestore.getDocuments("MythsFacts");
    for (var index in allDocuments){
      var documentID = (allDocuments[index]['name'])
      var result = documentID.substring(documentID.lastIndexOf("/") + 1);
      firestore.deleteDocument("MythsFacts/"+result);

    };
     
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "MythsFacts";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};
        
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
     
        firestore.createDocument("MythsFacts/",data);
 
      }
     
   }
 }



function NewsFunc() {

    var firestore = getFirestore();

    // A custom function that delete collections's of documents
    const allDocuments = firestore.getDocuments("News");
    for (var index in allDocuments){
      var documentID = (allDocuments[index]['name'])
      var result = documentID.substring(documentID.lastIndexOf("/") + 1);
      firestore.deleteDocument("News/"+result);
    };
     
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "Resources";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};
        
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
     
        firestore.createDocument("News/",data);
 
      }
     
   }
 }



function CampaignFunc() {

    var firestore = getFirestore();

    // A custom function that delete collections's of documents
    const allDocuments = firestore.getDocuments("Campaigns");
    for (var index in allDocuments){
      var documentID = (allDocuments[index]['name'])
      var result = documentID.substring(documentID.lastIndexOf("/") + 1);
      firestore.deleteDocument("Campaigns/"+result);
    };
     
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "Resources";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};
        
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
     
        firestore.createDocument("Campaigns/",data);
 
      }
     
   }
 }


function ResourceFunc() {

    var firestore = getFirestore();

    // A custom function that delete collections's of documents
    const allDocuments = firestore.getDocuments("Resources");
    for (var index in allDocuments){
      var documentID = (allDocuments[index]['name'])
      var result = documentID.substring(documentID.lastIndexOf("/") + 1);
      firestore.deleteDocument("Resources/"+result);
    };
     
   // get document data from ther spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetname = "Resources";
    var sheet = ss.getSheetByName(sheetname); 
    // get the last row and column in order to define range
    var sheetLR = sheet.getLastRow(); // get the last row
    var sheetLC = sheet.getLastColumn(); // get the last column
 
    var dataSR = 2; // the first row of data
    // define the data range
    var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);
 
    // get the data
    var sourceData = sourceRange.getValues();
    // get the number of length of the object in order to establish a loop value
    var sourceLen = sourceData.length;
   
   // Loop through the rows
    for (var i=0;i<sourceLen;i++){
      if(sourceData[i][1] !== '') {
        var data = {};
        
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
     
        firestore.createDocument("Resources/",data);
 
      }
     
   }
 }
