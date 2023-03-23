const loadUserAsync = async() =>
{

    const url = `https://randomuser.me/api/?gender=female`;
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0])
} 

const displayUser = user =>
{
   console.log(user);
}