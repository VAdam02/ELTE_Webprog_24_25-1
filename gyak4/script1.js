addEventListener("load", () => {
    addEventListener("click", orderBy);

    document.querySelectorAll("table").forEach(table => order(table))
})

function extractData(table) {
    const values = Array.from(table.rows).map(row => Array.from(row.cells).map(cell => new Cell(cell)));
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

    const table = event.target.closest("table");
    console.log(event.target)
    console.log(table)

    /*
    let orderByColumns = table.getAttribute("orderByColumns");
    */
    let orderByColumns = localStorage.getItem(table.id);
    if (orderByColumns == null) orderByColumns = [];
    else orderByColumns = JSON.parse(orderByColumns);

    if (!event.ctrlKey) orderByColumns = [];

    orderByColumns.push(event.target.cellIndex)

    console.log(orderByColumns)

    //table.setAttribute("orderByColumns", JSON.stringify(orderByColumns));
    localStorage.setItem(table.id, JSON.stringify(orderByColumns));

    order(table);
}

function order(table) {
    const values = extractData(table)

    let orderByColumns = localStorage.getItem(table.id);
    if (orderByColumns == null) orderByColumns = [];
    else orderByColumns = JSON.parse(orderByColumns);

    //const orderByColumns = JSON.parse(table.getAttribute("orderByColumns"));

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