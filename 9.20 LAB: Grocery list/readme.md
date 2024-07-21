Overview
The given a webpage allows the user to add items to a grocery list. A Clear button clears the list. The list is also cleared if the page is reloaded. In this lab, you will store the list using localStorage so reloading the page does not clear the list.

Web page with a text input and Add button, followed by a list of 3 items, followed by a Clear button.

Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files. The groceries.js file contains several completed functions:

The DOMContentLoaded event handler registers click handlers for the Add and Clear buttons, calls loadList() to load items from localStorage into the groceryList array, and calls showItem() to display the items in groceryList.

enableClearButton() enables or disables the Clear button.

showItem() displays a single item at the end of an ordered list.

addBtnClick() calls showItem() to display the item, adds the item to the groceryList array, and calls saveItem() to save the item to localStorage.

clearBtnClick() clears the groceryList array and removes all the items from the ordered list.

Step 2: Complete the functions
Complete the JavaScript functions below so the list is restored when the page is reloaded:

loadList() should load a grocery list from localStorage and return an array containing each item. Assume the list is stored as a single comma-delimited string. Ex: The list stored as "orange juice,milk,cereal" is returned as the array ["orange juice", "milk", "cereal"]. An empty array should be returned if localStorage does not contain a grocery list.

saveList() should save the given groceryList array to localStorage as a single comma-delimited string. Ex: The array ["orange juice", "milk", "cereal"] should be saved as the string "orange juice,milk,cereal".

clearList() should remove the grocery list from localStorage.

All three functions should use the localStorage item called "list".
