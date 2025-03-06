const SIZE = 32;

const root = document.getElementById("grid");
root.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`;

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", reset)

function createCell(row, col) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseenter", (event) => {
        event.target.classList.add("painted");
        console.log("paint!")
    })
    root.appendChild(cell);
}

function reset() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.classList.remove("painted"));
}

for (let row = 1; row <= SIZE; row++) {
    for (let col = 1; col <= SIZE; col++) {
        createCell(row, col);
    }
}
