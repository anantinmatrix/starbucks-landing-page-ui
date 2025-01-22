const searchbar = document.querySelector("#searchbar")


searchbar.addEventListener("click", () => {
    searchbar.style.width = "220px"
    searchbar.style.transition = ".5s ease"
    console.dir(searchbar)
    searchbar.placeholder = "Order Something"

})
document.addEventListener("click", (e) => {
    if (e.target !== searchbar) {
        searchbar.style.width = "100px"
        searchbar.placeholder = "Search"
    }
})
