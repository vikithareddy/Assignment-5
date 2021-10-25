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
            flavor_description.innerHTML = "Soft and fluffy rolled bread with sweet cinnamon walnuts filling with cream cheese glaze \
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
 
// update the data count attribute of the cart and display it as feedback when Add to Cart button is clicked
function cartNumberPreview() {
    const cart_data_count = document.getElementById("main-cart");
    cart_data_count_int = cart_data_count.getAttribute("data-count");
    cart_data_count_int = parseInt(cart_data_count_int);
    cart_data_count_int += 1;
    localStorage.setItem('cart-preview-count', JSON.stringify(cart_data_count_int));
    console.log(sessionStorage.getItem('cart-preview-count'));
    cart_data_count.setAttribute("data-count", localStorage.getItem('cart-preview-count'))
}  
  
//get product info from the Flavors page, change price according to the quantity selected and create a myBun object
function productInfo(product) {
    const flavors = document.getElementById("flavors"); // get the flavor name from the drop down list  
    const flavor_heading = document.getElementById("flavor-heading"); // get the flavor heading 
    const selected_flavor = flavors.value; // get specific flavor value 

    const glazing_types = document.getElementById("glazing-types"); // get the glazing selection from the drop down list 
    const selected_glazing = glazing_types.options[glazing_types.selectedIndex].value; // get specific glazing value

    const quantity_options = document.getElementById("quantity-options"); // get the quantity selection from the drop down list 
    const selected_quantity = quantity_options.options[quantity_options.selectedIndex].value; // get specific quantity value

    const product_price = document.getElementById("flavor-page-price"); // get the price using id selector

    // change the price displayed on the page according to the quantity selected
    if (selected_quantity == 1) {
        product_price.innerHTML = "$3.00";
    } else if (selected_quantity == 3) {
        product_price.innerHTML = "$9.00";
    } else if (selected_quantity == 6) {
        product_price.innerHTML = "$18.00";
    } else if (selected_quantity == 12) {
        product_price.innerHTML = "$36.00";
    };

    const product_price_text = document.getElementById("flavor-page-price").textContent;

    //create a bun product object
    const myBun = {
        flavor: selected_flavor,
        glazing: selected_glazing, 
        quantity: selected_quantity,
        price: product_price_text
    };

    // add to cart
    console.log("SENDING TO CART FUNCTION:", myBun);

    const add_to_cart_button = document.getElementById('add-to-cart');

    // CALLED ONLY IF ADD TO CART BUTTON IS CLICKED
    add_to_cart_button.addEventListener("click", () => {
        addToCart(myBun);
    });
}

// add myBun object to the cart dynamically
//FIXME: Incomplete function
function addToCart(myBun) {

    console.log("ADDING TO CART:", myBun)

    flavor = myBun.flavor; 
    glazing = myBun.glazing; 
    price = myBun.price; 
    quantity = myBun.quantity; 
    image = null;

    addToCartFeedback()

    // window.localStorage.setItem("flavor", JSON.stringify(flavor));
    // const product_title = document.getElementById("cart-flavor-title");
    // console.log("CART FLAVOR TITLE:", product_title);

    // var get_flavor_name = window.localStorage.getItem("flavor");
    // product_title.innerHTML = get_flavor_name;

    // console.log(get_flavor_name);
    
    /*// local storage -- save state 
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'productId' : productId + 1, image : '<imageLink>'});
    localStorage.setItem('products', JSON.stringify(products));*/

    // injecting into html -- html
    // taking object, extracting info and injecting to html 


    /* INJECT HTML into Shopping cart html */
    // const row = document.
    // row.innerHTML = "";
}

// show a feedback message when Add to Cart button clicked
//FIXME: Incomplete function
function addToCartFeedback() {
    const feedback = document.createElement('div');
    feedback.classList.add("add-to-cart-feedback");
    feedback.innerHTML = "New item added to cart!";
    document.body.appendChild(feedback);
}








































