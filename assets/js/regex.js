var regex = /sandwich/gi;
matches = document.body.innerText.match(regex);
if (matches) {
    var payload = {
        count: matches.length    // Pass the number of matches back.
    };
    chrome.extension.sendRequest(payload, function(response) {});
}