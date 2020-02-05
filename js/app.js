const container = document.querySelector(".container")
const coffees = [
    {name: "Red Velvet", image: "images/Anniversary1.jpg"},
    {name: "Strawberry", image: "images/Anniversary2.jpeg"},
    {name: "Vanilla", image: "images/Anniversary3.jpeg"},

    {name: "Chocolate", image: "images/Birthday1.jpeg"},
    {name: "Black Forest", image: "images/Birthday2.jpeg"},
    {name: "Vanilla Cheese", image: "images/Birthday3.jpeg"},

    {name: "Layered Vanilla", image: "images/Wedding1.jpeg"},
    {name: "Palm Vanilla", image: "images/Wedding2.jpg"},
    {name: "Fruite Vanilla", image: "images/Wedding3.jpeg"},

]


const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({name, image}) =>  
          (output +=`
                 <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                 </div>
          `)
    )
    container.innerHTML = output
}


document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
