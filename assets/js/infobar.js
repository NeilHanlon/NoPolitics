// Obtain the count of sandwiches from the page URL.
var count = window.location.hash.substring(1);
if (count) {
  // Replace the placeholder text with the actual count.
  var domcount = document.querySelector('#count');
  domcount.innerText = count;
}