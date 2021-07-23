document.querySelector("ul.filters").addEventListener("click", filterUpdate)

const selectedFilters = new Set();

function filterUpdate(event) {

    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    const isActive = event.target.classList.contains("filter_button--active");

    if (isActive) {
         selectedFilters.delete(event.target.dataset.value)
    } else {
       
        selectedFilters.add(event.target.dataset.value)
    }

    // console.log(selectedFilters)
    // console.log(selectedFilters.size)

    event.target.classList.toggle("filter_button--active")


    listChange();

}

function listChange() {
    const cardsArr = [...document.querySelectorAll("li.card")];
    const filtersArr = [...selectedFilters];
   
    console.log(filtersArr)
    
    cardsArr.forEach(function (item) {

        

        if (!filtersArr.includes(item.dataset.value)) {
            item.classList.add("hidden")
        } else {
            item.classList.remove("hidden")
        }

        if (filtersArr.length === 0) {
            item.classList.remove("hidden")
        }
        if (filtersArr.includes("all")) {
            item.classList.remove("hidden")
        }

    })
}