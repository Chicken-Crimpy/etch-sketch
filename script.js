const container = document.querySelector(".container");

function randRGB() {
    let red = (Math.round(Math.random()*255));
    let green = (Math.round(Math.random()*255));
    let blue = (Math.round(Math.random()*255));
    return `rgb(${red}, ${green}, ${blue})`;
}

function grid(number) {
    let column = document.createElement("div");
    column.className = "column";

    for (let i = 0; i < number; i ++) {
        container.appendChild(column);
        column = column.cloneNode(true);
    }
    const columns = document.querySelectorAll(".container .column");

    let square = document.createElement("div");
    square.className = "grid-box";

    columns.forEach((column) => {
        for (let i = 0; i < number; i ++) {
            column.appendChild(square);
            square = square.cloneNode(true);
        }
    })
    const items = document.querySelectorAll(".grid-box");

    items.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            e.target.setAttribute("style", `background-color: ${randRGB()};`);
        })
    })
}

grid(16);

function clear() {
    const items = document.querySelectorAll(".grid-box");
    items.forEach((item) => {
        item.setAttribute("style", "background-color: white;");
    })
    grid_number = parseInt(prompt("Number of squares per side? "));
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    return grid(grid_number);
}

const button = document.querySelector("button");
button.addEventListener("click", clear);
