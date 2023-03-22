const loadMeals = (ss) => 
{

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${ss}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals =>
{
    // console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        // console.log(meal);
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick = "displayMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb
                }" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal
                }</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
        </div>
        
        `;
        mealsContainer.appendChild(mealDiv);

        
    });
}

const searchFood = () =>
{
    const searcgField = document.getElementById('search_filed');
    const searchText = searcgField.value;
    loadMeals(searchText);
    searcgField.value = '';
}

const displayMealDetails = (idmeal) =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealShow(data.meals[0]))
}


const displayMealShow = () =>
{
   const details_Container = document.getElementById('details_container');
   

   
}
loadMeals ('');