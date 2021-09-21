let classAdd = document.querySelector(".classes-to-add"),
    classRemove = document.querySelector(".classes-to-remove"),
    currentEle = document.querySelector("div[title='Current']"),
    classListArea = document.querySelector(".classes-list").lastElementChild,
    classListAreaSpan;

function show() {
    currentEle.classList.length === 0 ? classListArea.innerHTML = "No Classes To Show" : classListArea.innerHTML = "";
    classListArea.querySelectorAll("span").forEach(e => e.remove());
    for (let i = 0; i< currentEle.classList.length; i++) {
        classListAreaSpan = document.createElement("span");
        classListAreaSpan.innerHTML = currentEle.classList.item(i).toLowerCase();
        classListArea.appendChild(classListAreaSpan);
    }
}
function add() {
    classAdd.value.length !== 0 ? classAdd.value.split(" ").map(e => currentEle.classList.add(e.toLowerCase())) : "";
    classAdd.value = "";
    show()
}
function remove() {
    classRemove.value.length !== 0 ? classRemove.value.split(" ").map(e => currentEle.classList.remove(e.toLowerCase())) : "";
    classRemove.value = "";
    show()
}
classAdd.onblur = add;
classRemove.onblur = remove;
console.log()