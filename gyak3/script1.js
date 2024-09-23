addEventListener("load", () => {
    const links = document.querySelectorAll("a")
    console.log(links);
    //Array.from(links).filter....
    links.forEach(element => element.addEventListener("click", blockNonElteLinks))
})

function blockNonElteLinks(event) {

    console.log({asd: event.target});
    if (!event.target.href.includes("elte")) {
        event.preventDefault();
        console.log("Nem elte linket nyitottál meg")
        return;
    }
}

addEventListener("click", (event) => {
    console.log(event)
})