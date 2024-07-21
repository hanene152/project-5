Overview
The webpage displays a growing orange circle when the Show Circle button is clicked. In this lab, you will create callbacks for a Promise object that shows a text message inside the circle, as show below.

Web page showing a Show Page button in top-left and a large orange circle with "Ta da!" in the center.

Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files:

index.html contains a single button for starting the circle animation.

styles.css file defines a CSS transition that animates the circle's size increase over 2 seconds.

circle.js file contains a click event handler showCircleClick() for the Show Circle button that calls showCircle() to display the orange circle. The showCircle() function returns a Promise object that may be fulfilled or rejected.

The promise is fulfilled in one second if showCircle() is not called a second time before the second elapses.
The promise is rejected if showCircle() is called a second time before the second elapses.
Step 2: Implement showCircleClick()
Modify the showCircleClick() to call showCircle() and handle the fulfilled or rejected callbacks using the returned Promise's then() method.

If the promise is fulfilled, the <div> containing the circle is passed to the callback function. The message "Ta da!" should be added to the <div>'s inner HTML.
If the promise is rejected, an error message is passed to the callback function. The error message should be displayed using alert().
If your modifications are written correctly, you should see the "Ta da!" message appear one second after the Show Circle button is clicked. If you click Show Circle twice quickly, you should see the error message appear in the alert dialog box, as shown below.

Web page showing a partial circle and "showCircle called too soon" error message in the alert dialog.
