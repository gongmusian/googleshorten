// JavaScript File
function myFunction() {
  onOpenUi();
  rangeShort();
}

function onOpenUi() {
  SpreadsheetApp.getUi()
    .createMenu("縮網址按鈕")
    .addItem("縮網址 !!","rangeShort")
    .addToUi()  
}

//get spread sheet range
function rangeShort() {
  var range = SpreadsheetApp.getActiveRange(), data = range.getValues();
  var output = [];
  for(var i = 0, iLen = data.length; i < iLen; i++) {
    var url = UrlShortener.Url.insert({longUrl: data[i][0]});
    output.push([url.id]);
  }
  range.offset(0,1).setValues(output);
}

