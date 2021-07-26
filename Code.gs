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

        const allDocuments = firestore.getDocuments("Awareness/");
        console.log(allDocuments);        
        data.id = sourceData[i][0];
        data.Title = sourceData[i][1];
        data.Description = sourceData[i][2];
        
        firestore.updateDocument("Awareness/"+ data.id,data,true);
 
      }
     
   }
 }






function CBSDonationFunc() {
    var firestore = getFirestore();
     
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
     
        firestore.updateDocument("BloodDonationData/"+ data.id,data);
 
      }
     
   }
 }




function dailyTipsFunc() {

    var firestore = FirestoreApp.getFirestore (email, key, projectId);
     
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
     
        firestore.updateDocument("DailyTips/"+ data.id,data);
 
      }
     
   }
 }



function MythsFactsFunc() {

    var firestore = getFirestore();
     
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
     
        firestore.updateDocument("MythsFacts/"+ data.id,data);
 
      }
     
   }
 }



function NewsFunc() {

    var firestore = getFirestore();
     
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
     
        firestore.updateDocument("Resources/"+ data.id,data);
 
      }
     
   }
 }




 
 
function NewsFunc() {

    var firestore = FgetFirestore();
     
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
     
        firestore.updateDocument("News/"+ data.id,data);
 
      }
     
   }
 }
