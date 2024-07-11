# WK 2 CODE CHALLENGE #
## Constructing an interactive Shopping List ##
### Introduction ###
>The challenged combined array iteration, DOM manipulation, and event handling to create an interactive shopping list application
>Developing the webpage involved creating 3 main files: "index.html", "index.js" and "styles.css".

### Writing the HTML file for the website ###

>The HTML file was a simple file with link tag to link with the stylesheet and with a script tag to link with the Java Script file

### Writing the CSS file to style the website ###

>Styling was done on the entire page, the different elements assigned with particular Ids and Classes.

### Writing the JS File ##

>This is where all the majic happens.
>Here is where differnt functions were developed:

1. addTask() :This function access whether an input has been made, if not it alerts the User to input an item. If an item is inputed, it pushs the new item to the shopping list and invokes the updateLustUI() and savedata() respectively. addTask() is called onclick of the add button.

2. clearList(): This function is only invoked by clicking the Clear List button. Its function is to remove shopping list from the local storage, empty the listConctainer and setting shopping list to an Empty Array

3. updateListUI: Here the 'li' element and the 'span' element are created. Span is appended to li while li is appended to list-container(ul)

4. saveData(): This function saves data to the browser local storage so that even when the browser is refreshed, the inputed items are not lost.

5. loadSavedData(): Accesses the localStorage and retrieves the saved data

6. The addEventListener is also a handy tool: It is used to indicate when the items are purchased and also to remove an item from the list incase the user changes their mind.

