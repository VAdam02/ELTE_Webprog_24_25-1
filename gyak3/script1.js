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

    //document.querySelector(".swap").addEventListener("click", swapLI)

    document.querySelectorAll(".swap").forEach(element => element.addEventListener("click", swapLI));
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
    //console.log(event);
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

let firstClicked = null;
function swapLI(event) {
    console.log(event.target.tagName)
    if (event.target.tagName != "LI") return;

    if (firstClicked == null) {
        firstClicked = event.target;
        firstClicked.style.fontWeight = "bold"
        firstClicked.style.color = "magenta"
    }
    else {
        firstClicked.style.fontWeight = "normal"
        firstClicked.style.color = "black"

        const temp = event.target.innerHTML;
        event.target.innerHTML = firstClicked.innerHTML;
        firstClicked.innerHTML = temp;

        firstClicked = null;
    }
}