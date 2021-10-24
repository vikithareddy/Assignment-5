
//FIXME: change flavor description, change nutrition info, chnage ingredient list 
function flavorSelection(flavor) {
    // const flavorImg = document.getElementsByClassName("flavor-image");
    // console.log(flavorImg);

    // get the flavor name from the drop down list  
    const flavors = document.getElementById("flavors");

    // get the flavor heading 
    const flavor_heading = document.getElementById("flavor-heading");

    const selected_flavor = flavors.value;

    // change the flavor heading according to the flavor selected 
    flavor_heading.innerHTML = selected_flavor;

    // get the flavor description
    const flavor_description = document.getElementById("flavor-description");

    // get the image 
    const flavor_image = document.getElementById("flavor-image");

    // get the nutrition info 
    const nutrition_description = document.getElementById("nutrition-details");

    // get the ingredients info 
    const ingredient_list = document.getElementById("ingredients-details");

    switch(selected_flavor) {
        case "Original(GF)":
            // update description 
            flavor_description.innerHTML = " \
            Original(GF) \
            description \
            ";
            // update image
            flavor_image.src = "images/original(gf).png";
            nutrition_description.innerHTML = "CHANGED";
            ingredient_list.innerHTML = "CHANGED";
            break;

        case "Walnut":
            // update description 
            flavor_description.innerHTML = " \
            Walnut \
            description \
            ";
            // update image 
            flavor_image.src = "images/walnut.png";
            nutrition_description.innerHTML = "CHANGED2";
            ingredient_list.innerHTML = "CHANGED2";
            break;
        
        case "Pumpkin Spice":
            // update description 
            flavor_description.innerHTML = " \
            Pumpkin Spice \
            description \
            ";
            // update image 
            flavor_image.src = "images/pumpkin-spice.png";
            nutrition_description.innerHTML = "CHANGED3";
            ingredient_list.innerHTML = "CHANGED3";
            break;

        case "Caramel Pecan":
            // update description 
            flavor_description.innerHTML = " \
            Caramel Pecan \
            description \
            ";
            // update image 
            flavor_image.src = "images/caramel-pecan.png";
            nutrition_description.innerHTML = "CHANGED4";
            ingredient_list.innerHTML = "CHANGED4";
            break;

        case "Blackberry":
            // update description 
            flavor_description.innerHTML = " \
            Blackberry \
            descriptiong \
            ";
            // update image 
            flavor_image.src = "images/blackberry.png";
            nutrition_description.innerHTML = "CHANGED5";
            ingredient_list.innerHTML = "CHANGED5";
            break;
    }  
}

localStorage.setItem("ingredient", "this");

console.log(localStorage);

/*STEPS :: 

1) Main function that runs when the browser is loaded: 

    // looks out for a click when a new bun wants to be added to cart
    function loadEventListeners() {} 
    
    // read the course info values needed to display 
    function buyBun() {}

    // store html with bun info values 
    function addToCart(bun) {}


2) More functionality 
    // remove an item 
    function removeBun(b) {}

    // remove all items in cart 
    function clearCart() {} 

3) local storage 
https://blog.logrocket.com/localstorage-javascript-complete-guide/
*/
loadEventListeners();

// listening for an event - adding or deleting from cart
function loadEventListeners() {
    //when new course is added
    // courses.addEventListener('click', buyCourse);
    // buns.addEventListener('click', buyBun); 

    // handler to event
    function buyBun() {
        // targeting -- is the button add to cart 
        getBunInfo(); 
    }
}

// getting info for item needed for HTML
function getBunInfo() {
    // gets info

    addToCart(); 
}

/*
function addProduct(){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'productId' : productId + 1, image : '<imageLink>'});
    localStorage.setItem('products', JSON.stringify(products));
}
*/

// changing lcoal storage and html cart by adding
function addToCart() {
    // local storage
}

/*
function removeProduct(productId){

    // Your logic for your app.

    // strore products in local storage

    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.productId !== productId );
    localStorage.setItem('products', JSON.stringify(products));
}
*/
// changing local storage and html cart by deleting one
function removeFromCart() {

}

// clearing out all local storage and html for cart 
function removeAllFromCart() {

    // removeFromCart(); 
}

