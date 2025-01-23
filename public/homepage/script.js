const searchbar = document.querySelector("#searchbar")
const searchArea = document.querySelector(".search button")


searchbar.addEventListener("click", () => {
    searchbar.style.width = "220px"
    searchbar.style.transition = ".5s ease"
    searchbar.placeholder = "Order Something"

})
document.addEventListener("click", (e) => {
    if (e.target !== searchbar) {
        searchbar.style.width = "100px"
        searchbar.placeholder = "Search"
    }
})


// Scroller for latest offering section
const scrollBtn = document.querySelectorAll(".scrollbtn")
const cards = document.querySelector(".latest_offerings .cards")

scrollBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let leftBtn = "lat_off_scroll_left";
        let rightBtn = "lat_off_scroll_right"
        if (btn.getAttribute("id") === rightBtn) {
            cards.scrollBy({
                left: 407,
                behavior: "smooth"
            })
        }
        if (btn.getAttribute("id") === leftBtn) {
            cards.scrollBy({
                left: - 407,
                behavior: "smooth"
            })
        }
    })
})
// scroller for barista section
const baristaCards = document.querySelector(".barista_rec .cards")

scrollBtn.forEach((btn) => {
    let leftBtn = "barista_scroll_left";
    let rightBtn = "barista_scroll_right";
    btn.addEventListener("click", () => {
        if (btn.getAttribute("id") === leftBtn) {
            baristaCards.scrollBy({
                left: -395,
                behavior: "smooth"
            })
        }
        if (btn.getAttribute("id") === rightBtn) {
            baristaCards.scrollBy({
                left: 395,
                behavior: "smooth"
            })
        }
    })

})