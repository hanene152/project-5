// HTML for the up, down, and done buttons
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function () {
   $("#addBtn").on("click", addBtnClick);

   // Add item if user presses Enter
   $("#newItemText").on("keyup", function (event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   // Don't add empty strings
   if (itemText.length !== 0) {
      addItem(itemText);

      // Clear text and put focus back in text input
      $("#newItemText").val("").focus();
   }
}

function addItem(item) {
   // Create a new <li> for the list
   let $newItem = $(`<li><span>${item}</span></li>`);

   // Up button moves item up one spot
   let $upButton = $(upButtonHtml).on("click", function () {
      let index = $(this).parent().index();
      moveItem(index, index - 1);
   });

   // Down button moves item down one spot
   let $downButton = $(downButtonHtml).on("click", function () {
      let index = $(this).parent().index();
      moveItem(index, index + 1);
   });

   // Add click handler for done button
   let $doneButton = $(doneButtonHtml).on("click", function () {
      // Remove item from list
      let index = $(this).parent().index();
      removeItem(index);
   });

   // Append buttons to the new item
   $newItem.append($upButton, $downButton, $doneButton);

   // Append the new item to the list
   $("ol").append($newItem);
}

function moveItem(fromIndex, toIndex) {
   let $items = $("ol").children();
   if (toIndex >= 0 && toIndex < $items.length) {
      let $item = $items.eq(fromIndex).detach();
      if (toIndex > fromIndex) {
         $items.eq(toIndex).after($item);
      } else {
         $items.eq(toIndex).before($item);
      }
   }
}

function removeItem(index) {
   $("ol").children().eq(index).remove();
}
