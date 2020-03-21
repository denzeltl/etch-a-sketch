const container = document.querySelector(".container");

// functions
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

// events
window.addEventListener("load", generateBoxes(16));
