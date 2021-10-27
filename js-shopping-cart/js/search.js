let no_result = document.querySelector('#no_course')
let search_target = document.querySelector("#search");


search_target.addEventListener("keyup", function(e) {

    // Create a variable that stock what we typed to lower cases.

    let search_item = e.target.value.toLowerCase();

    //  Create a variable that stocks course titles.

    let span_items = document.querySelectorAll(".courses__container #nom");

    // Initating a counting variable

    let count_result = 0;

    // Create a loop that implements every titles 

    span_items.forEach(function(item) {


        if (item.textContent.toLocaleLowerCase().indexOf(search_item) != -1) {

            // If what we typed match with the title, display it and increments the count.

            item.closest(".course__item").style.display = "block";
            count_result++;

        } else {

            // If what we typed doesn't match the title, hide it

            item.closest(".course__item").style.display = "none";

        }
    });

    // If there is no result, remove the class 'hidden' from the message "There is no result" to print it

    if (count_result == 0) no_result.classList.remove('hidden');

    // When there is a new result after this, add the class 'hidden' to hide the message

    else no_result.classList.add('hidden');

})