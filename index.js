const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let shoppingList = [];

//function for adding a new item
function addTask(){
    if(inputBox.value === ""){
        alert("Please include an item you would like to purchase");
    } else {
        let newItem = inputBox.value;
        shoppingList.push(newItem);
        updateListUI();
        saveData();
    }
    inputBox.value = "";
}
//function to update the list according to the user input 
function updateListUI(){
    listContainer.innerHTML = "";
    shoppingList.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        span.setAttribute =('data-index', index);

        li.appendChild(span);
        listContainer.appendChild(li);
    });
}
//Event listener for marking the item as purchased and also deleting an item from the list
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN"){
        let index = e.target.getAttribute('data-index');
        shoppingList.splice(index,1);
        updateListUI();
        saveData();
    }
});

// function for saving data to the browser storage
function saveData(){
    localStorage.setItem("shoppingList",JSON.stringify(shoppingList));
}

//Retrieve the data form the browser storage 
function loadSavedData(){
    let savedList = localStorage.getItem("shoppingList");
    if (savedList) {
        shoppingList = JSON.parse(savedList);
        updateListUI();
    }
}

loadSavedData();



