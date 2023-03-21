const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayShow(data.results))
}

loadUsers();

const displayShow = users => {
    console.log(users);
    const divID = document.getElementById('div_ID');
    let count = 0;
    for (const user of users) {
       count = count +1;
       
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
            <h3>${count} User Name ${user.name.first} </h3>
            <h2>Gender : ${user.gender} </h2>
            <p> User location:  ${user.location.city}</p>
        `
       
        divID.appendChild(div);
    }
    
}