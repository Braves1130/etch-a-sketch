const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#new-grid-btn");

newGridBtn.addEventListener("click", () => {
const size = prompt("Wieviele quadrate nebeneinander? (Max 100)");

if (size >100) {
    altert("Bitte eine Zahl unter 100 eingeben!");
} else{ 
    container.innerHTML ="";
    createGrid(size)
}
});



function createGrid(size) {
    const squareSize = 960 / size;

    for (let i = 0; i < size * size ; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
                square.classList.add("squareChange");
            });
    }
}

