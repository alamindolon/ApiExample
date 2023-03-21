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
       

        countryDiv.innerHTML = `
        
        <h3>Country Name: ${country.name.common} </h3>
        <p> Capital: ${country.capital ? country.capital[0] : 'No capital'} </p>

        <button onclick = "displayDatails('${country.cca2}')">Details</button>

        `;
        divContainer.appendChild(countryDiv);
        
    });
}

const displayDatails = (code) =>
{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayDatailsShow(data[0]))
}

const displayDatailsShow =country =>
{
    const displayDetailsID =  document.getElementById('Country_DetailsID');
    displayDetailsID.innerHTML = `
    
    <h2> Details: ${country.name.common}</h2>
    <img src = '${country.flags.png}'>
    `;

}

loadCountries();