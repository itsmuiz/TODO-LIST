
function AddTask() {
    if (inputbox.value === "") {

        alert('Empty Task');
        inputbox.focus();

    } else {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let task = inputbox.value;
        
        span.innerHTML = "\u00d7";
        li.innerHTML = task;

        list.appendChild(li);
        li.appendChild(span);
        
        inputbox.value = "";
        saveData();
    }
    document.getElementById
}

inputbox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        AddTask();
    }
});

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData (){
    localStorage.setItem("data", list.innerHTML);
}

function loadData (){
    list.innerHTML = localStorage.getItem("data");
}

loadData();