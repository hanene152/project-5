const directions = {
   UP: 'up',
   DOWN: 'down',
   LEFT: 'left',
   RIGHT: 'right'
}

window.addEventListener("load", function () {
   const canvas = document.querySelector("canvas");

   // Ensure the context is correctly obtained from the canvas
   if (canvas && canvas.getContext) {
      // Draw 4 frogs facing different directions
      drawFrog(canvas, 50, 50, directions.UP);
      drawFrog(canvas, 180, 50, directions.DOWN);
      drawFrog(canvas, 50, 180, directions.LEFT);
      drawFrog(canvas, 180, 180, directions.RIGHT);
   } else {
      console.error("Canvas or context not supported.");
   }
});

function drawFrog(canvas, x, y, direction = directions.UP) {
   const context = canvas.getContext("2d");
   const frogImg = document.querySelector("img");

   // Ensure the context is correctly obtained from the canvas
   if (!context) {
      console.error("Canvas context could not be obtained.");
      return;
   }

   if (direction !== directions.UP) {
      // Calculate the center of the frog image
      const centerX = x + frogImg.width / 2;
      const centerY = y + frogImg.height / 2;

      // Translate to the center of the frog image
      context.translate(centerX, centerY);

      switch (direction) {
         case directions.DOWN:
            context.rotate(Math.PI); // 180 degrees
            break;
         case directions.LEFT:
            context.rotate(-Math.PI / 2); // 90 degrees counterclockwise
            break;
         case directions.RIGHT:
            context.rotate(Math.PI / 2); // 90 degrees clockwise
            break;
      }

      // Translate back to the top-left corner of the frog image
      context.translate(-centerX, -centerY);
   }

   // Draw the frog image
   context.drawImage(frogImg, x, y);

   // Restore the context to its original state
   context.resetTransform();
}
