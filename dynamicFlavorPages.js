// create an object with the Original Flavor page details and store it in localStorage
const originalFlavorPage = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Original",
        "description" : "The original is our bestselling flavor made with made with a combination of warm dough, \
        legendary Makara cinnamon, and signature cream cheese for a freshly baked, irresistible \
        sweet treat.",
        "imageSrc" : "images/original.png",
        "nutrition" : "Calories (per serving): <span>320 kcal</span>, Carb: <span>46g</span>, \
        Protein: <span>6g</span>, Fat: <span>13g</span>",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, heavy cream"
    }
    ))
};

// create an object with the Original (GF) Flavor page details and store it in localStorage
const originalGfFlavorPage = () => {
    console.log("GF");
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Original(GF)",
        "description" : "The original is our bestselling flavor made with made with a combination of warm dough, \
        legendary Makara cinnamon, and signature cream cheese for a freshly baked, irresistible \
        sweet treat. The gluten free version is perfect for those with gluten intolerence.",
        "imageSrc" : "images/original(gf).png",
        "nutrition" : "Calories (per serving): <span>320 kcal</span>, Carb: <span>46g</span>, \
        Protein: <span>6g</span>, Fat: <span>13g</span>",
        "ingredients" : "Buckwheat, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, heavy cream"
    }
    ))
};

// create an object with the Walnut Flavor page details and store it in localStorage
const walnutPageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Walnut",
        "description" : "Soft and fluffy rolled bread with sweet cinnamon walnuts filling with cream cheese glaze \
        (or substitute with our other glazing options). These are perfect for Fall with the right \
        balance of sugary cinnamon and chunky walnuts.",
        "imageSrc" : "images/walnut.png",
        "nutrition" : "Calories (per serving): <span>350 kcal</span>, Carb: <span>46g</span>, \
        Protein: <span>6g</span>, Fat: <span>18g</span>",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, chopped walnuts"
    }
    ))
};

// create an object with the Pumpkin Spice Flavor page details and store it in localStorage
const pumpkinSpicePageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Pumpkin Spice",
        "description" : "Pumpkin Spice Cinnamon Rolls are fluffy, sweet, and packed with everyone’s favorite pumpkin \
        spice flavor. Eat these cinnamon rolls the night before and pop them in the oven on a cozy autumn morning for a breakfast \
        the whole family will love.",
        "imageSrc" : "images/pumpkin-spice.png",
        "nutrition" : "Calories (per serving): <span>350 kcal</span>, Carb: <span>46g</span>, \
        Protein: <span>6g</span>, Fat: <span>18g</span>",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, Pumpkin, pumpkin spice"
    }
    ))
};

// create an object with the Caramel Pecan Flavor page details and store it in localStorage
const caramelPecanPageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Caramel Pecan",
        "description" : "When the weather gets chillier though, nothing beats a slice of warm pie, for sure, \
        but which one’s your favorite? It should be our warm, fluffy caramel pecan roll with a delicious, sweet filling \
        that you're sure to love.",
        "imageSrc" : "images/caramel-pecan.png",
        "nutrition" : "Calories (per serving): <span>380 kcal</span>, Carb: <span>49g</span>, \
        Protein: <span>6g</span>, Fat: <span>18g</span>",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, caramel, pecans"
    }
    ))
};

// create an object with the Blackberry Flavor page details and store it in localStorage
const blackberryPageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Bkackberry",
        "description" : "How could cinnamon rolls possibly get any better? By adding Oregon blackberries \
        of course! Have these as a great start to your day during breakfast or as a mid-day pick me up. These are great \
        all year round.",
        "imageSrc" : "images/blackberry.png",
        "nutrition" : "Calories (per serving): <span>310 kcal</span>, Carb: <span>42g</span>, \
        Protein: <span>6g</span>, Fat: <span>14g</span>",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, Oregon blackberries"
    }
    ))
};

/* this function is called when the Flavor Page loads to dynamically population each flavor page
with the corresponding details.
*/
const flavorPageLoad = () => {
    const flavorDetails = JSON.parse(window.localStorage.getItem("pageDetails"));
    document.getElementById("flavor-heading").innerHTML = flavorDetails.flavor;
    document.getElementById("flavor-description").innerHTML = flavorDetails.description;
    document.getElementById("flavor-image").src = flavorDetails.imageSrc;
    document.getElementById("nutrition-details").innerHTML = flavorDetails.nutrition;
    document.getElementById("ingredients-details").innerHTML = flavorDetails.ingredients;
}