Overview
In this lab, you will create three JavaScript classes for a webpage that allows a super hero and villain to battle, as shown below.

Web page shows a drop-down menu for heroes and another for villains. A duel between Mighty Woman and The Jokester results in "Winner: Mighty Woman!"

Step 1: Inspect the project
The project contains HTML, CSS, and two JavaScript files. The index.html file contains two drop-down widgets listing the names of super heroes and super villains. A paragraph with ID winner is empty but will display the winner of a battle between the selected hero and villain.

The index.js file contains the following:

Two constants, heroes and villains, that contain a list of SuperHero and SuperVillain objects.

A registerHandlers() function registers change event handlers for the two drop-down widgets.

A selectionChanged() function that is called when a hero or villain is selected. The function calls the selected hero's battle() method with the selected villain and displays the winner's alias in the winner paragraph.

The hero.js file is empty.

Step 2: Create three classes
Add the following to hero.js:

Create a SuperHuman class with properties name and powerLevel and a constructor that has name and powerLevel parameters.

Create SuperHero and SuperVillain classes that extend the SuperHuman class. Both classes should have a constructor that has name, alias, and powerLevel parameters, and the constructor should call the parent class's constructor with the given name and powerLevel.

Add a battle() method to the SuperHero class that has a SuperVillain parameter. battle() should return true if the hero's powerLevel is >= the villain's powerLevel, false otherwise.

Add a getEvilChuckle() method to the SuperVillain class that returns the string "Ha ha ha!".

When the modifications are complete, the webpage will show the winner between the selected hero and villain.
