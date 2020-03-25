const container = document.querySelector(".container");
const clear = document.querySelector(".clear");

// functions
function startFunctions() {
    generateBoxes(16);
    colorBox();
}
function generateBoxes(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let x = 0; x < size; x++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }
}
function colorBox() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add("colored");
        });
    });
}
function clearColors() {
    const boxNumber = alert("Please enter the size of new container. (Choose from 16-100)", "0");
    console.log(boxNumber);
}

// events
window.addEventListener("load", startFunctions);
clear.addEventListener("click", clearColors);
