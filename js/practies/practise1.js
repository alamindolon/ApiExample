const player_Name = () =>
{
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck')
    .then(res => res.json())
    .then(data => displayName(data.player[0]));
}

const displayName  = (name) =>
{
   const Pid = document.getElementById('paragraphDisplay');
   console.log(name);
   Pid.innerText = name.strPlayer;



}

player_Name();