const container = document.querySelector(".container");
const clear = document.querySelector(".clear");

// functions
function startFunctions(size) {
    generateBoxes(size);
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
    const boxNumber = prompt("Please enter the size of new container. (Choose from 16-64)");
    if (boxNumber > 15 && boxNumber < 65) {
        container.innerHTML = "";
        startFunctions(boxNumber);
    } else {
        clearColors();
    }
}

// events
window.addEventListener("load", () => {
    startFunctions(16);
});
clear.addEventListener("click", clearColors);
