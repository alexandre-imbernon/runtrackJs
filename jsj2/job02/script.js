function showhide() {
    let citation = document.getElementById('citation')
    citation.style.display = (getComputedStyle(citation).display != "none") ? "none" : "block"
    // ? équivaut à if et permet de verifier la condition
}
