addEventListener("load", () => {
    values = extractData(document.getElementById("targyak"))

    document.getElementById("targyak").addEventListener("click", orderBy);
})

let values;
function extractData(table) {
    const values = Array.from(targyak.rows).map(row => Array.from(row.cells).map(cell => new Cell(cell)));
    return values;
}

/*
[
    { column: 5, order: "ASC" },
    { column: 2, order: "DESC" }
]

[5, -2] //mit csinálsz a 0. oszlopnál?
*/

function orderBy(event) {
    if (event.target.tagName !== "TH") return;

    let orderByColumns = event.target.closest("table").getAttribute("orderByColumns");
    if (orderByColumns == null) orderByColumns = [];
    else orderByColumns = JSON.parse(orderByColumns);

    if (!event.ctrlKey) orderByColumns = [];

    orderByColumns.push(event.target.cellIndex)

    console.log(orderByColumns)

    event.target.closest("table").setAttribute("orderByColumns", JSON.stringify(orderByColumns));

    order(event.target.closest("table"));
}

function order(table) {
    const orderByColumns = JSON.parse(table.getAttribute("orderByColumns"));

    values.sort((a, b) => {
        for (const orderBy of orderByColumns) {
            const result = a[orderBy].value.localeCompare(b[orderBy].value);
            if (result != 0) {
                return result;
            }
        }
        return 0;
    });

    table.children[1].remove();
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