addEventListener("load", () => {
    values = extractData(document.getElementById("targyak"))

    document.getElementById("targyak").addEventListener("click", orderBy);
})

let values;
function extractData(table) {
    const values = Array.from(targyak.rows).map(row => Array.from(row.cells).map(cell => new Cell(cell)));
    return values;
}

function orderBy(event) {
    if (event.target.tagName !== "TH") return;
    event.target.closest("table").setAttribute("orderBy", event.target.cellIndex);

    order(event.target.closest("table"));
}

function order(table) {
    const orderBy = table.getAttribute("orderBy");

    values.sort((a, b) => a[orderBy].value.localeCompare(b[orderBy].value));

    Array.from(table.children[1].children).forEach(element => element.remove());
    const tbody = document.createElement("tbody");

    for (const row of values) {
        const tr = document.createElement("tr")
        for (const cell of row) {
            const td = document.createElement("td")
            td.innerHTML = cell.value;

            tr.appendChild(td);
        }
        tbody.appendChild(tr)
    }

    table.appendChild(tbody);
}

class Cell {
    value;
    #privateData;
    constructor(cell) {
        this.value = cell.innerHTML;
    }
}