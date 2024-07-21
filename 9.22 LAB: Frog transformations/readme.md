Overview
The current webpage displays a canvas with four frog images all pointing up. In this lab, you will write the necessary JavaScript that shows the frogs pointing up, down, left, and right as shown below.

Web page showing 4 frogs arranged in 2 rows. Top-left frog faces up, top-right faces down, bottom-left faces left, and bottom-right faces right.

Step 1: Inspect the project
The project contains HTML, image, and JavaScript files. The index.html file contains a 600 x 600 canvas. An <img> element uses inline CSS to hide the frog.png image.

The frog.js file contains two functions:

The load event handler calls drawFrog() four times with different canvas coordinates and directions.

drawFrog() is only partially implemented and currently displays a frog facing up on the canvas at the given (x, y) coordinate.

Step 2: Implement drawFrog()
Complete the drawFrog() function to draw the frog facing down, left, or right, depending on the direction parameter. Use the canvas context methods translate(), rotate(), and drawImage() to perform the following:

Translate the canvas origin from (0, 0) to the center of the frog image, which is (x + frogImg.width / 2, y + frogImg.height / 2)
Rotate 90 degrees clockwise to draw the frog facing right, 90 degrees counterclockwise to face left, and 180 degrees to face down
Translate the origin back to (0, 0)
Draw the frog image
Note: Incorrect translation may cause the frog to be drawn off the canvas where the frog can't be seen.
