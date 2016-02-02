function changeHtml(id, text) {
  document.getElementById(id).innerHTML = text;
}
/* Use like this:
* changeHtml(id of the element, text)
* It allows you to change contents of an .html page.
*/
changeHtml("demo", "This is the new text.");
