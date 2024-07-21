Overview
In this lab, you will add animations to a Memory game using jQuery. The user must click two cards to see what is underneath. If the selected cards match, the cards are left face-up. The goal is to find all matching cards. The New Game button starts a new game.

Web page shows a 3 rows and 4 columns of blue rectangles, but 6 rectangles (3 pairs) are white with matching shapes. Two red hearts match, two gold crosses match, and two purple diamonds match. A New Game button appears at the bottom.

Step 1: Inspect the JavaScript
The given memory.js file implements several functions:

ready event handler - Adds <div> elements to the card grid and adds click event handlers to each card that calls clickCard() with an index that indicates which card is clicked. The global $cardDivs array is initialized with all the div elements.

clickCard() - Calls showCard() to display the first and second cards selected and calls hideCard() if the two selected cards do not match.

showCard() - Shows a card by setting the card's inner HTML and color and adding the card-visible class.

hideCard() - Hides a card by removing the card's inner HTML and removing the card-visible class.

showMatch() - Currently does nothing.

newGame() - Starts a new game by randomizing and hiding all the cards.

Step 2: Animate showing a card
Make the following modifications to animate the card flipping over:

In the ready event handler, call the jQuery method hide() to hide the $game before the for loop.

Modify showCard() so the card appears to flip over and display face-up:

Call slideUp() to slide up the back side of the card in 200 ms.

Then set the card's inner HTML and color, and add the card-visible class.

Finally, call slideDown() to have the card slide back down in 200 ms, revealing the card's symbol.

You may find the jQuery method queue() helpful to perform all the operations in the correct order.

Image shows blue rectangle sliding up in parts and then white rectangle sliding down with red heart.

Step 3: Animate hiding a card
Modify hideCard() so the card appears to flip over and display face-down:

Call the jQuery method slideUp() to slide up the face side of the card in 200 ms.

Then set the card's inner HTML to an empty string and remove the card-visible class.

Finally, call the jQuery method slideDown() to have the blue side of the card slide back down in 200 ms.

You may find the jQuery method queue() helpful to perform all the operations in the correct order.

Step 4: Animate matching cards
Modify showMatch() to animate two matching cards. Use setTimeout() to delay for half a second, then call the jQuery method animate() to make the two matching cards' symbol fonts grow in size from 75px to 100px in 200 milliseconds, then back down to 75px in 200 milliseconds.

Image shows yellow star using 70px font size at 500 ms, then 100px font size at 700 ms, then back to 70px at 900 ms.

Step 5: Animate starting a new game
Modify newGame() so clicking the New Game button fades out and in the game board:

Call fadeOut() to fade out the div with ID cardGrid.

Randomize the cards.

Hide the cards.

Call fadeIn() to make the cardGrid div visible again.

Use "normal" speed for both animations. Make sure the cards are not hidden until the fade out operation is completed.

After all modifications are complete, the cards will animate when being flipped, and two matching cards' symbols will grow and shrink in size when first matched. All the cards will fade in and out when a new game is started.

