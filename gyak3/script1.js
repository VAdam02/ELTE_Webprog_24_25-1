addEventListener("load", () => {
    const links = document.querySelectorAll("a")
    console.log(links);
    //Array.from(links).filter....
    links.forEach(element => element.addEventListener("click", blockNonElteLinks))
   
    /*
   const linkDiv = document.querySelector("div").addEventListener("click", blockNonElteLinks2)
   */

   document.querySelectorAll(".left").forEach(element => element.addEventListener("input", copyContent))


   addEventListener("click", (
        (alma) => copyContent(alma))
    );
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

function copyContent(event) {
    console.log(event);
    if (event.target.tagName !== "INPUT") return;

    console.log({asd: event.target})
    console.log(event.target.parentNode.childNodes[2])
    event.target.parentNode.childNodes[2].value="24"
}



/*
addEventListener("click", (event) => {
    console.log(event)
})
*/