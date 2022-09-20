const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".pokeSearchBtn");
const generatorBtn = document.querySelector(".pokeGeneratorBtn");
const pokeDataDiv = document.querySelector(".pokeData");

const endpoint = "https://pokeapi.co/api/v2";



const searchPokeData = () => {
    const keyword = searchInput.value 
    if(keyword === ""){
        pokeDataDiv.innerHTML = ""
        pokeDataDiv.insertAdjacentHTML("beforeend", 
        `<span class="error"> Enter Pokemon name or id </span>`)
    } else {
        fetch(`${endpoint}/pokemon/${keyword}`)
        .then(response => response.json())
        .then(data => setPokeData(data))
        .catch(error => console.error(error));
        }
    }

const getRandomPokeData = () => {
    const id = Math.floor(Math.random() * 1000);
    fetch(`${endpoint}/pokemon/${id}`)
    .then(response => response.json())
    .then(data => setPokeData(data))
    .catch(error => console.error(error));
}


const setPokeData = (data) => {
    console.log(data); 
    pokeDataDiv.innerHTML = "";
    pokeDataDiv.insertAdjacentHTML("beforeend", 
   `<h2> ${data.name}</h2>
    <img src=${ data.sprites.front_default}>
    <span class="pokeId">ID - ${data.id}</span>
    <span class="pokeType">TYPE - ${data.types[0].type.name}</span>`
    )

}
                     
generatorBtn.addEventListener("click", getRandomPokeData);
searchBtn.addEventListener("click", searchPokeData)

