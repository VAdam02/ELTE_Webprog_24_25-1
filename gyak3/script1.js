addEventListener("load", () => {
    const links = document.querySelectorAll("a")
    console.log(links);
    //Array.from(links).filter....
    links.forEach(element => element.addEventListener("click", blockNonElteLinks))
   
    /*
   const linkDiv = document.querySelector("div").addEventListener("click", blockNonElteLinks2)
   */
})

function blockNonElteLinks(event) {
    //enélkül ha a gombra kattint hibára fut
    if (event.target.tagName != "A") return;

    console.log({asd: event.target});
    if (!event.target.href.includes("elte")) {
        event.preventDefault();
        console.log("Nem elte linket nyitottál meg")
        return;
    }
}

function blockNonElteLinks2(event) {
    if (event.target.tagName != "A") return;

    console.log({asd: event.target});
    if (!event.target.href.includes("elte")) {
        event.preventDefault();
        console.log("Nem elte linket nyitottál meg")
        return;
    }
}

/*
addEventListener("click", (event) => {
    console.log(event)
})
*/