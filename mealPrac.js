loadMealPage = (search) => 
{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealPage(data.meals))
}

const displayMealPage = (mealPage) =>
{
    console.log(mealPage);

    const divContainer = document.getElementById('meal_container');
    mealPage.forEach(meal => {
        
        const divMeal = document.createElement('div');
        divMeal.classList.add('col');
        divMeal.innerHTML = `
      
        <div class="card">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${meal.strMeal
                }</h5>
                <p class="card-text">${meal.strInstructions.slice(0,120)}</p>
            </div>
            <button class="btn btn-primary mx-auto" type="button" onclick = "itemDetails(${meal.idMeal
            })">Button</button>
      </div>
      
     
        
        `;
        divContainer.appendChild(divMeal);
        
        
    });

   
}

const searchButton = () =>
{
    const searchFiled = document.getElementById('searchField');
    const searchText = searchFiled.value;
    loadMealPage(searchText);
    searchFiled.value = '';
}

const itemDetails = (idMeal) =>
{
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => itemDtailsDisplay(data.meals[0]))

}
const itemDtailsDisplay = (code) =>
{
    console.log(code);
    const selectMeal = document.getElementById('select_meal');
   const selectMealDiv = document.createElement('div');
   selectMealDiv.innerHTML = `

   <div class="card">
   <img src="${code.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
       <h5 class="card-title text-center"> strMeal Name: ${code.strMeal}</h5>
       <h5 class="card-title text-center">strArea: ${code.strArea
       }</h5>
       <h5 class="card-title text-center">strCategory: ${code.strCategory}</h5>
       <h5 class="card-title text-center">strTags: ${code.strTags}</h5>
       
   </div>
   
</div>

   `;
   selectMeal.appendChild(selectMealDiv);
}
