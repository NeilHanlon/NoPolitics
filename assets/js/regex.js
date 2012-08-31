var regex = [
/romney/gi,
/obama/gi,
/mitt romney/gi,
/barack obama/gi,
/election\ 2012/gi,
/us\ election/gi,
/american\ president/gi,
/liberal/gi,
/conservative/gi,
/democrat/gi,
/republican/gi,
/2012\ election/gi,
/november\ election/gi
];

var newRegex = /^romney|obama|mitt(?=romney)|barack(?=obama)|election\ 2012|us\ election|liberal|conservative|republican|2012\ election|november\ election/gi;
var matches = 0;
var dbi = document.body.innerText;
console.log(dbi.match(newRegex));
console.log(dbi);
for(var i= 0; i<regex.length;i++){
    var match = dbi.match(regex[i]);
    if(match != null){
        matches += match.length;
    }
}
if (matches) {
    var payload = {
        count: matches,    // Pass the number of matches back.
        regex: regex,
        dbi: dbi
    };
    chrome.extension.sendRequest(payload, function(response) {});
}