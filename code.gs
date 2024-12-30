function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById("Google spreadsheet id").getSheetByName("sheet name");
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),               // Timestamp
      data.name || "",          // Name
      data.email || "",         // Email
      data.imageTitle || "",     // Image Title
      data.imageBase64Data || "",   // Base64 Image data
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    // Open the spreadsheet and access the "data" sheet
    const sheet = SpreadsheetApp.openById("Google spreadsheet id").getSheetByName("sheet name");
    const data = sheet.getDataRange().getValues(); // Get all data from the sheet

    // Skip the header row and map the data to JSON format
    const entries = data.slice(1).map(row => ({
      timestamp: row[0],       // Timestamp
      name: row[1],            // Name
      email: row[2],           // Email
      imageTitle: row[3],      // Image Title
      imageBase64: row[4],     // Base64 Image data
    }));

    // Return the data as a JSON response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, entries })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Handle errors and return an error message in JSON
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
