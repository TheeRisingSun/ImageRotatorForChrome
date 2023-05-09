
var images = document.getElementsByTagName("img");


for (var i = 0; i < images.length; i++) {

  
  var width = images[i].naturalWidth;
  var height = images[i].naturalHeight;

  var threshold = 300; // change this value as you like

  if (width > threshold && height > threshold) {
    // Create a button element
    var button = document.createElement("button");
    // Set the text of the button
    button.innerText = "Rotate";
    // Set the style of the button
    button.style.position = "absolute";
    button.style.zIndex = "9999";
    // Set the position of the button relative to the image
    button.style.top = images[i].offsetTop + "px";
    button.style.left = images[i].offsetLeft + images[i].offsetWidth - 50 + "px";
    // Add an event listener to the button to rotate the image when clicked
    button.addEventListener("click", function(e) {
      // Get the image element that is next to the button
      var image = e.target.nextElementSibling;
      // Get the current rotation angle of the image
      var angle = parseInt(image.getAttribute("data-angle")) || 0;
      // Increment the angle by 90 degrees
      angle += 90;
      // Set the new rotation angle of the image
      image.setAttribute("data-angle", angle);
      // Apply the CSS transform property to rotate and center the image
      image.style.transform = "rotate(" + angle + "deg)";
      // Apply the CSS transform-origin property to set the rotation point to the center of the image
      image.style.transformOrigin = "center center";
      // Apply the CSS margin property to center the image horizontally and vertically
      image.style.margin = "10% auto";
    });
    // Insert the button before the image in the DOM
    images[i].parentNode.insertBefore(button, images[i]);
  }
}