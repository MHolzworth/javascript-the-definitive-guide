function moveon() {
  // Display a modal dialog to ask the user a question
  var answer = confirm("Ready to move on?");
  // If they clicked the "OK" button, make the browser load a new page
  if (answer) window.location = "http://google.com";
}

// Display a message in a special debugging output section of the document.
// If the document does not contain such a section, create one.
function debug(msg) {
  // Find the debugging section of the document, looking at HTML id attributes
  var log = document.getElementById("debuglog");

  // If no element with the id "debuglog" exists, create one.
  if (!log) {
    log = document.createElement("div");    // Create a new <div> element
    log.id = "debuglog";                    // Set the HTML id attribute on it
    log.innerHTML = "<h1>Debug Log</h1>";   // Define initial content
    document.body.appendChild(log);         // Add it at end of document
  }

  // Now wrap the message in its own <pre> and append it to the log
  var pre = document.createElement("pre");  // Create a <pre> tag
  var text = document.createTextNode(msg);  // Wrap msg in a text node
  pre.appendChild(text);                    // Add text to the <pre>
  log.appendChild(pre);                     // Add <pre> to the log
}

function debugJq(msg) {
  var log = $("#debuglogjq");           // Find the element to display msg in.
  if (log.length == 0) {                // If it doesn't exist yet, create it...
    log = $("<div id='debuglog'><h1>Debug Log JQ</h1></div>");
    log.appendTo(document.body);        // and insert it at the end of the body.
  }
  log.append($("<pre/>".text(msg)));    // Wrap msg in <pre> and append to log.
}

function hide(e, reflow) {  // Hide the element by scripting its style
  if (reflow) {                           // If 2nd arguement is true
    e.style.display = "none";             // hide element and use its space
  } else {
    e.style.visibility = "hidden";        // make invisible, but leave its space
  }
}

function highlight(e) {     // Highlight e by setting a CSS class
    // Simply define or append to the HTML class attribute.
    // This assumes tht a CSS stylesheet already defines the "hilite" class
    if (!e.className) e.className = "hilite";
    else e.className += " hilite";
}

// The "load" event occurs when a documentis fully loaded.  Usually we
// need to wait for this event before we start tunning our JavaScript code.
window.onload = function() { // Run this function when the document loads
  // Find all <img> tags in the document
  var images = document.getElementsByTagName("img");

  // Loop through them, adding an event handler for the "click"events to each
  // so that clicking on the image hides it.
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    if (image.addEventListener) // Another way to register a handler
      image.addEventListener("click", hide, false);
    else
      image.attachEvent("onlick", hide);
  }

  // This is the event handler function registered above
  function hide(event) { event.target.style.visibility = "hidden"; }
};
