/**
 * Google Apps Script Webhook handler
 * This code should be placed in your Google Apps Script editor.
 * 
 * It handles the incoming form submissions from the site.
 */

function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    var source = params.source;
    var timestamp = params.timestamp || new Date().toISOString();
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // --- NEW CONDITIONAL BRANCH FOR BOOK A CALL PRE-QUALIFICATION ---
    if (source === "call_request") {
      var callRequestsSheet = sheet.getSheetByName("Call Requests");
      
      // If the sheet doesn't exist, create it and write headers
      if (!callRequestsSheet) {
        callRequestsSheet = sheet.insertSheet("Call Requests");
        callRequestsSheet.appendRow([
          "Timestamp",
          "Email",
          "Role and Organization",
          "Purpose of Call",
          "Source",
          "Status"
        ]);
        
        // Style headers
        callRequestsSheet.getRange(1, 1, 1, 6)
          .setFontWeight("bold")
          .setBackground("#F4F1EA")
          .setFontColor("#1A3C34");
      }
      
      // Append the incoming pre-qualification details
      callRequestsSheet.appendRow([
        timestamp,
        params.email || "",
        params.role || "",
        params.purpose || "",
        params.source || "call_request",
        "Pending Review" // Status column default value
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Call request captured successfully" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // --- EXISTING BRANCHES (e.g. Masterclass, Freebies, Contact form) ---
    // Please do not modify existing active spreadsheet sheets/handlers
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
