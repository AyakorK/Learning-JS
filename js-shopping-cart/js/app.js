//External vars initialisations
addToCart = document.getElementsByClassName('add-to-cart');
item = document.getElementsByClassName('course__item');
panier_div = document.getElementById('cart-table');
let courses = document.querySelectorAll('.add-to-cart');
let panier = document.getElementById('tbody');
let stocks = document.querySelectorAll('.stock');





//Loop Beginning
for (let i = 0; i < COURSES.length; i++) {
    //Internal vars initialisation
    var title = COURSES[i].title;
    var img = COURSES[i].img;
    var init_price = COURSES[i].initial_price;
    var price = COURSES[i].price;
    var stock = COURSES[i].stock;
    var id = COURSES[i].id;
    var infos = COURSES[i]
    var article = JSON.stringify([COURSES[i]]);



    // Stock status
    addToCart[i].addEventListener('click', () => {

        cartNumbers(COURSES[i]);

        //Try to count how many courses are left
        if (COURSES[i].stock > 0) {
            console.clear();
            COURSES[i].stock -= 1;
            stocks[i].innerText = COURSES[i].stock;
            console.log(COURSES[i].stock);
            console.log(stocks)
        } else {
            alert('Vous ne pouvez pas en acheter davantage'); //If no stock, alert to say that there is none left.
        }
    })







    console.log(COURSES[i]); // Console log all courses


    // Show all courses in HTML file
    document.getElementsByClassName('.courses__container').innerHTML += `
        <div class="course__item">
        <figure class="course_img">
        <img src="img/courses/${img}">
        </figure>f
        <div class="info__card">
        <h4>${title}</h4>
        <figure class="mark m_4">
            <img src="img/rates.png">
        </figure>
        <p>
            <span class="price">${init_price} €</span>
            <span class="discount">${price} €</span>
        </p>
        <p>
            Disponible: <span class="stock">${stock}</span>
        </p>
        <a href="#" class="add-to-cart" data-id="${id}"><i class="fa
            fa-cart-plus"></i>Ajouter au panier</a>
        </div>
    </div>
    `;


}

//  

function cartNumbers(COURSES) {

    console.log("item clicked", COURSES);
    let productsNumbers = localStorage.getItem('cartNumbers');
    productsNumbers = parseInt(productsNumbers);


    if (productsNumbers) {

        localStorage.setItem('cartNumbers', productsNumbers + 1);
    } else {

        localStorage.setItem('cartNumbers', 1);
    }



}







// let carts = document.querySelectorAll('.add-to-cart');

// for (let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         console.log("added to cart")
//     })
// }



const searchinput = document.getElementById('search-item');

searchinput.addEventListener('keyup', function() {
    const input = searchinput.value

    const result = COURSES.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    console.log(result);
})