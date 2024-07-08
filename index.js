const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let shoppingList = [];


function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let newItem = inputBox.value;
        shoppingList.push(newItem); 
        updateListUI(); 
        saveData(); 
    }
    inputBox.value = "";
}


function updateListUI() {
    listContainer.innerHTML = ''; 
    shoppingList.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        
        let span = document.createElement("span");
        span.textContent = "\u00d7"; 
        span.setAttribute('data-index', index); 
        
        li.appendChild(span);
        listContainer.appendChild(li);
    });
}


listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        let index = e.target.getAttribute('data-index');
        shoppingList.splice(index, 1); /
        updateListUI(); 
        saveData(); 
    }
});


function saveData() {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}


function loadSavedData() {
    let savedList = localStorage.getItem("shoppingList");
    if (savedList) {
        shoppingList = JSON.parse(savedList);
        updateListUI(); 
    }
}

loadSavedData();