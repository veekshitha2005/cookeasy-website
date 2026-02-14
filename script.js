function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* ================= USER SUBMISSION STORAGE ================= */

document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();

    let name=document.getElementById("userName").value;
    let recipe=document.getElementById("userRecipe").value;

    let data=JSON.parse(localStorage.getItem("recipes"))||[];
    data.push({name:name,recipe:recipe});
    localStorage.setItem("recipes",JSON.stringify(data));

    loadRecipes();
    this.reset();
});

function loadRecipes(){
    let data=JSON.parse(localStorage.getItem("recipes"))||[];
    let container=document.getElementById("recipeList");
    container.innerHTML="";

    data.forEach(item=>{
        container.innerHTML+=`
        <div class="user-card">
            <h3>${item.name}</h3>
            <p>${item.recipe}</p>
        </div>`;
    });
}

window.onload=loadRecipes;

/* ================= BEGINNER RECIPE DETAILS ================= */

function openRecipe(type){
    let content="";

    if(type==="pasta"){
        content=`
        <h2>Creamy Garlic Pasta</h2>
        <p><b>Ingredients:</b> 200g pasta, 3 cloves garlic, 1 cup cream, 1 tbsp butter, salt, pepper.</p>
        <p><b>Step 1:</b> Boil pasta in salted water for 8–10 minutes.</p>
        <p><b>Step 2:</b> Heat butter in a pan and sauté minced garlic until fragrant.</p>
        <p><b>Step 3:</b> Add cream, simmer for 5 minutes.</p>
        <p><b>Step 4:</b> Mix drained pasta with sauce.</p>
        <p><b>Step 5:</b> Season and serve hot.</p>`;
    }

    if(type==="rice"){
        content=`
        <h2>Vegetable Fried Rice</h2>
        <p><b>Ingredients:</b> Cooked rice, carrots, beans, capsicum, soy sauce.</p>
        <p><b>Step 1:</b> Heat oil in a wok.</p>
        <p><b>Step 2:</b> Add chopped vegetables and sauté.</p>
        <p><b>Step 3:</b> Add rice and soy sauce.</p>
        <p><b>Step 4:</b> Stir fry on high flame 5–7 minutes.</p>
        <p><b>Step 5:</b> Garnish and serve.</p>`;
    }

    if(type==="salad"){
        content=`
        <h2>Fresh Garden Salad</h2>
        <p><b>Ingredients:</b> Lettuce, cucumber, tomato, olive oil, lemon.</p>
        <p><b>Step 1:</b> Wash and chop vegetables.</p>
        <p><b>Step 2:</b> Mix olive oil and lemon for dressing.</p>
        <p><b>Step 3:</b> Toss everything together.</p>
        <p><b>Step 4:</b> Chill for 10 minutes.</p>
        <p><b>Step 5:</b> Serve fresh.</p>`;
    }

    document.getElementById("recipeDetails").innerHTML=content;
    document.getElementById("recipeModal").style.display="block";
}

function closeModal(){
    document.getElementById("recipeModal").style.display="none";
}
