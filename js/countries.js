const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayShowCountry(data))
}


const displayShowCountry = countries =>
{
    // for (const country of countries) {
    //     console.log(country);
    // }
    const divContainer = document.getElementById('counteries_container');
    countries.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country);

        countryDiv.innerHTML = `
        
        <h3>Country Name: ${country.name.common} </h3>
        <p> Capital: ${country.capital ? country.capital[0] : 'No capital'} </p>

        `;
        divContainer.appendChild(countryDiv);
        
    });
}

loadCountries();