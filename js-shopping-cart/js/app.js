//Loop Beginning
for (let j = 0; j < COURSES.length; j++) {
    let img = COURSES[j].img;
    let title = COURSES[j].title;
    let init_price = COURSES[j].initial_price;
    let price = COURSES[j].price;
    let id = COURSES[j].id;
    let stock = COURSES[j].stock;
    let mark = COURSES[j].mark;



    if (localStorage.getItem(`Stock de ${COURSES[j].title}`)) {
        stock = localStorage.getItem(`Stock de ${COURSES[j].title}`)
    }

    // Show all courses in HTML file
    document.querySelector('.courses__container').innerHTML += ` 
    <div class = "course__item" >
            <figure class = "course_img" >
            <img src = "img/courses/${img}" >
            </figure> 
            <div class = "info__card" >
            <h4 id="nom"> ${title} </h4> 
            <figure class = "mark m_${mark}" >
            <img src = "img/rates.png" >
            </figure> 
            <p>
            <span class = "price" > ${init_price }€ </span> 
            <span class = "discount" > ${ price }€ </span>
             </p> 
             <p>
            Disponible: <span class = "stock" > ${ stock } </span>
             </p>
            <a href = "#"
            class = "add-to-cart"
            data - id = "${id}"> <i i class = "fa
            fa - cart - plus "></i>Ajouter au panier</a> 
            </div> 
            </div>`;
}

//External vars initialisations
addToCart = document.getElementsByClassName('add-to-cart');
item = document.getElementsByClassName('course__item');
panier_div = document.getElementById('cart-table');
let courses = document.querySelectorAll('.add-to-cart');
let panier = document.getElementById('tbody');
let stocks = document.querySelectorAll('.stock');


for (let i = 0; i < COURSES.length; i++) {
    //Internal vars initialisation









    // Stock status
    if (localStorage.getItem(`Stock de ${COURSES[i].title}`)) {
        COURSES[i].stock = localStorage.getItem(`Stock de ${COURSES[i].title}`)
    }
    addToCart[i].addEventListener('click', () => {


        //Try to count how many courses are left
        if (COURSES[i].stock > 0) {
            console.clear();
            COURSES[i].stock -= 1;
            cartNumbers(COURSES[i]);

            console.log(COURSES[i].stock);

            console.log(stocks)

            if (!localStorage.getItem(`Stock de ${COURSES[i].title}`)) {
                localStorage.setItem(`Stock de ${ COURSES[i].title }`, COURSES[i].stock);
                stocks[i].innerText = COURSES[i].stock;
            } else {
                localStorage.setItem(`Stock de ${ COURSES[i].title }`, parseInt(localStorage.getItem(`Stock de ${ COURSES[i].title }`)) - 1);
                stocks[i].innerText = localStorage.getItem(`Stock de ${ COURSES[i].title }`);
            }

        } else {
            alert('Vous ne pouvez pas en acheter davantage'); //If no stock, alert to say that there is none left.
        }


    })







    console.log(COURSES[i]); // Console log all courses

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