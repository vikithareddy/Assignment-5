//
//
// Flavors Tab -- flavors.html 
//
//
// change the flavor page content according to the flavor selected in the drop down menu 
function flavorSelection(flavor) {
    /* FLAVOR ELEMENTS */
    const flavors = document.getElementById("flavors"); // get the flavor name from the drop down list  
    const flavor_heading = document.getElementById("flavor-heading"); // get the flavor heading 
    const selected_flavor = flavors.value; // get specific flavor value
    const flavor_description = document.getElementById("flavor-description"); // get the flavor description
    const flavor_image = document.getElementById("flavor-image"); // get the image 
    const nutrition_description = document.getElementById("nutrition-details"); // get the nutrition info 
    const ingredient_list = document.getElementById("ingredients-details"); // get the ingredients info 
    flavor_heading.innerHTML = selected_flavor; // change the flavor heading according to the flavor selected 

    /* CONTENT FROM SELECTED FLAVOR */
    switch(selected_flavor) {
        case "Original":
            // update description 
            flavor_description.innerHTML = "The original is our bestselling flavor made with made with a combination of warm dough, \
            legendary Makara cinnamon, and signature cream cheese for a freshly baked, irresistible \
            sweet treat.";
            // update image
            flavor_image.src = "images/original.png";
            nutrition_description.innerHTML = "Calories (per serving): <span>320 kcal</span>, Carb: <span>46g</span>, \
            Protein: <span>6g</span>, Fat: <span>13g</span>";
            ingredient_list.innerHTML = "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
            vanilla extract, brown sugar, maple extract, powdered sugar, heavy cream";
            break;
        case "Original(GF)":
            // update description 
            flavor_description.innerHTML = "The original is our bestselling flavor made with made with a combination of warm dough, \
            legendary Makara cinnamon, and signature cream cheese for a freshly baked, irresistible \
            sweet treat. The gluten free version is perfect for those with gluten intolerence.";
            // update image
            flavor_image.src = "images/original(gf).png";
            nutrition_description.innerHTML = "Calories (per serving): <span>320 kcal</span>, Carb: <span>46g</span>, \
            Protein: <span>6g</span>, Fat: <span>13g</span>";
            ingredient_list.innerHTML = "Buckwheat, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
            vanilla extract, brown sugar, maple extract, powdered sugar, heavy cream";
            break;

        case "Walnut":
            // update description 
            flavor_description.innerHTML = " Soft and fluffy rolled bread with sweet cinnamon walnuts filling with cream cheese glaze \
            (or substitute with our other glazing options). These are perfect for Fall with the right \
            balance of sugary cinnamon and chunky walnuts.";
            // update image 
            flavor_image.src = "images/walnut.png";
            nutrition_description.innerHTML = "Calories (per serving): <span>350 kcal</span>, Carb: <span>46g</span>, \
            Protein: <span>6g</span>, Fat: <span>18g</span>";
            ingredient_list.innerHTML = "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
            vanilla extract, brown sugar, maple extract, powdered sugar, chopped walnuts";
            break;
        
        case "Pumpkin Spice":
            // update description 
            flavor_description.innerHTML = "Pumpkin Spice Cinnamon Rolls are fluffy, sweet, and packed with everyone’s favorite pumpkin \
            spice flavor. Eat these cinnamon rolls the night before and pop them in the oven on a cozy autumn morning for a breakfast \
            the whole family will love.";
            // update image 
            flavor_image.src = "images/pumpkin-spice.png";
            nutrition_description.innerHTML = "Calories (per serving): <span>350 kcal</span>, Carb: <span>46g</span>, \
            Protein: <span>6g</span>, Fat: <span>18g</span>";
            ingredient_list.innerHTML = "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
            vanilla extract, brown sugar, maple extract, powdered sugar, Pumpkin, pumpkin spice";
            break;

        case "Caramel Pecan":
            // update description 
            flavor_description.innerHTML = "When the weather gets chillier though, nothing beats a slice of warm pie, for sure, \
            but which one’s your favorite? It should be our warm, fluffy caramel pecan roll with a delicious, sweet filling \
            that you're sure to love.";
            // update image 
            flavor_image.src = "images/caramel-pecan.png";
            nutrition_description.innerHTML = "Calories (per serving): <span>380 kcal</span>, Carb: <span>49g</span>, \
            Protein: <span>6g</span>, Fat: <span>18g</span>";
            ingredient_list.innerHTML = "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
            vanilla extract, brown sugar, maple extract, powdered sugar, caramel, pecans";
            break;

        case "Blackberry":
            // update description 
            flavor_description.innerHTML = "How could cinnamon rolls possibly get any better? By adding Oregon blackberries \
            of course! Have these as a great start to your day during breakfast or as a mid-day pick me up. These are great \
            all year round.";
            // update image 
            flavor_image.src = "images/blackberry.png";
            nutrition_description.innerHTML = "Calories (per serving): <span>310 kcal</span>, Carb: <span>42g</span>, \
            Protein: <span>6g</span>, Fat: <span>14g</span>";
            ingredient_list.innerHTML = "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
            vanilla extract, brown sugar, maple extract, powdered sugar, Oregon blackberries";
            break;
    }  
}




// Shop Tab, Popup -- products.html 
/* when the cart icon of each product is clicked, change the flavor name and the image on the popup*/
function popupContent(cart_selected) {
    console.log(cart_selected.id);
    const flavor_name = document.getElementById("flavor-name");
    const popup_flavor_image = document.getElementById("popup-flavor-image");

    // switch case statements to target the id of the selected flavor
    switch(cart_selected.id) {
        case "cart-flavor-original":
            flavor_name.innerHTML  = "Original";
            popup_flavor_image.src = "images/original.png";
            break;

        case "cart-flavor-original-gf":
            flavor_name.innerHTML  = "Original (Gluten-Free)";
            popup_flavor_image.src = "images/original(gf).png";
            break;

        case "cart-flavor-walnut":
            flavor_name.innerHTML  = "Walnut";
            popup_flavor_image.src = "images/walnut.png";
            break;

        case "cart-flavor-pumpkin":
            flavor_name.innerHTML  = "Pumpkin-Spice";
            popup_flavor_image.src = "images/pumpkin-spice.png";
            break;

        case "cart-flavor-caramel":
            flavor_name.innerHTML  = "Caramel Pecan";
            popup_flavor_image.src = "images/caramel-pecan.png";
            break;
        
        case "cart-flavor-blackberry":
            flavor_name.innerHTML  = "Blackberry";
            popup_flavor_image.src = "images/blackberry.png";
            break;
    }
}


/* dynamically change the total price according to the quantity selected */
function onRadioClick(radioButton) {
    if(radioButton.value == "1") {
        document.getElementById("popup-cost").innerHTML = "$3.00";
    }

    if(radioButton.value == "3") {
        document.getElementById("popup-cost").innerHTML = "$9.00";
    }

    if(radioButton.value == "6") {
        document.getElementById("popup-cost").innerHTML = "$18.00";
    }

    if(radioButton.value == "12") {
        document.getElementById("popup-cost").innerHTML = "$36.00";
    }
};


//if add to cart button is clicked
//grab the item quantity from the cart page 
//update the data count attribute of the cart 
//add to localstorage to keep it persistent
function cartNumberPreview() {
    const cart_data_count = document.getElementById("main-cart");
    cart_data_count_int = cart_data_count.getAttribute("data-count");
    cart_data_count_int = parseInt(cart_data_count_int);
    cart_data_count_int += 1;
    //cart_data_count.setAttribute("data-count", cart_data_count_int.toString())
    localStorage.setItem('cart-preview-count', cart_data_count_int.toString());
    //cart_data_count_int = sessionStorage.getItem('cart-preview-count');
    console.log(sessionStorage.getItem('cart-preview-count'));
    cart_data_count.setAttribute("data-count", sessionStorage.getItem('cart-preview-count'))
}  
  

function getBunInfo(bun) {
    const bunInfo = {
        flavor: document.getElementById("flavor-name").textContent,
        glazing: "tbd",
        quantity: "tbd",
        cost: document.getElementById("popup-cost").textContent
    };
};


// const bunInfo = {
//     flavor: document.getElementById("flavor-name").innerHTML,
//     glazing: "tbd",
//     quantity: "tbd",
//     cost: document.getElementById("popup-cost").textContent
// };


// const products = document.querySelector('.popup-grid');
// console.log(products);

// const shopping_cart_content = document.querySelector('#product-details-text');
// console.log(shopping_cart_content);

// const trial = document.querySelector('#product-one');
// console.log(trial);






































/*
// ************************
loadEventListeners();

// listening for an event - adding or deleting from cart
function loadEventListeners() {
    // Event -- when new bun is added to cart
    const buns = document.querySelector("#popup1");
    console.log(buns); 
    buns.addEventListener('click', buyBun);
    // handler to event
    function buyBun(b) {
        if (b.target.classList.contains('add-to-cart')) {
            console.log(b);
            getBunInfo(b); 
        }
    }
}
*/


// getting info for item needed for HTML
// function getBunInfo() {
    // gets info
    /*const bunInfo = {
        flavor: , 
        glazing: , 
        quantity: , 
        price: , 
    }*/
    // addToCart(bunInfo); 
// }

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
// function addToCart(bunInfo) {
    // local storage

    // injecting into html
// }

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
// function removeFromCart() {

// }

// clearing out all local storage and html for cart 
// function removeAllFromCart() {

    // removeFromCart(); 
// }

