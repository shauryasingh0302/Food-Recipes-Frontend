const recipes = [
    {
        name: "Chole Bhature",
        diet: "Vegetarian",
        image: "bhature.jpg",
        link: "bhature.html"
    },
    {
        name: "Aloo Parathe",
        diet: "Vegetarian",
        image: "aloo.jpg",
        link: "aloo.html"
    },
    {
        name: "Pasta",
        diet: "Fast Food",
        image: "pasta.jpg",
        link: "pasta.html"
    },
    {
        name: "Panner Butter Masala",
        diet: "Vegetarian",
        image: "paneer.jpg",
        link: "paneer.html"
    },
    {
        name: "Dal Makhani",
        diet: "Vegetarian",
        image: "dal.jpeg",
        link: "dal.html"
    },
    {
        name: "Dosa",
        diet: "Vegetarian",
        image: "dosa.jpg",
        link: "dosa.html"
    },
];


function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Diet: ${recipe.diet}</p>
            <button onclick="showRecipe('${recipe.link}')">View Recipe</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

function showRecipe(recipeLink) {
    window.location.href = recipeLink;
}

displayRecipes();
