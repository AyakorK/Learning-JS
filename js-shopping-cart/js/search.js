let search_target = document.querySelector("#search");
search_target.addEventListener("keyup", function(e) {
    let search_item = e.target.value.toLowerCase();
    let span_items = document.querySelectorAll(".courses__container #nom");
    span_items.forEach(function(item) {
        if (item.textContent.toLocaleLowerCase().indexOf(search_item) != -1) {
            item.closest(".course__item").style.display = "block";
        } else {
            item.closest(".course__item").style.display = "none";
        }

    })
})