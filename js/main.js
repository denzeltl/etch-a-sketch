const container = document.querySelector(".container");

// functions
function generateBoxes(size) {
    const containerWidth = container.getBoundingClientRect().width;
    const boxWidth = containerWidth / size;
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxWidth}px`;
        container.appendChild(box);
        console.log(box.offsetWidth);
    }
}

// events
window.addEventListener("load", generateBoxes(16));
