/**
* Copyright 2019 Google LLC.
* SPDX-License-Identifier: Apache-2.0
*/

secretEmail = "masked";
secretKey = "masked"
secretId = "masked";

// Cloud Firestore instance
function getFirestore() {
    const email = secretEmail;
    const key = secretKey;
    const projectId = secretId;
 return FirestoreApp.getFirestore(email, key, projectId); 
  }


// // A custom function that delete collections's of documents
// function importFromFirestore() {
//     var firestore = getFirestore();
//     const allDocuments = firestore.getDocuments("Awareness");
//     var myDict = {};
//     for (var index in allDocuments){
//       var documentID = (allDocuments[index]['name'])
//       var result = documentID.substring(documentID.lastIndexOf("/") + 1);
//       firestore.deleteDocument("Awareness/"+result);

//     };
    
// }


// Awareness Function
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
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
        
         // Establishes the Documents from the awarenss sheeet
        firestore.createDocument("Awareness",data);
 
      }
     
   }
 }





// Awareness Function
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
        
          // Establishes the Documents from the CBS_Donation_Data sheeet
        firestore.createDocument("BloodDonationData/",data);
 
      }
     
   }
 }



// Daily Tips Function
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
        
         // Establishes the Documents from the DailyTips sheeet
        firestore.createDocument("DailyTips/",data);
 
      }
     
   }
 }


// Myths and Facts Funtion
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
        // Establishes the Documents from the MythsFacts sheeet
        firestore.createDocument("MythsFacts/",data);
 
      }
     
   }
 }


// News Fuction
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
          
        // Establishes the Documents from the News sheeet
        firestore.createDocument("News/",data);
 
      }
     
   }
 }

// Resources Function
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
        // Establishes the Documents from the Resources sheeet
        firestore.createDocument("Resources/",data);
 
      }
     
   }
 }
