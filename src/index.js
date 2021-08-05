console.log('%c HI', 'color: firebrick')
// fetch and display images
document.addEventListener('DOMContentLoaded', function(){
    const breedList = document.querySelector('#dog-breeds')
const dogImageStorage = document.getElementById('dog-image-container')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let dogArr = [
    
]

fetch('https://dog.ceo/api/breeds/image/random/4')
.then(response =>  response.json())
.then(function(jsonObject){
    let dogArr = jsonObject.message
    dogArr.forEach(url => {
        dogImageStorage.innerHTML += makeImgTag(url)
    })
})

function makeImgTag(url){
    return `<img src="${url}"/>`
}

// dogArr.forEach(image => imageStorage.appendChild(image));
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


makeFetch()
.then(resp => {
   let dogBreedsArr = Object.keys(resp.message)
   dogBreedsArr.forEach(addLiToDom)
})

function addLiToDom(breed){
  breedList.innerHTML += `<li data-info="breed">${breed}</li>`
}
//3-on user click of any li, its font color changes
breedList.addEventListener('click', function(event){
   if(event.target.dataset.info === "breed"){
     event.target.style.color = "green"
   } 
})
function makeFetch(){
  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
}

//4
let dogSelect = document.querySelector("#breed-dropdown")
dogSelect.addEventListener('change', (event)=>{
    makeFetch()
    .then(resp => {
      let dogBreedsArr = Object.keys(resp.message)
      let filteredArr = dogBreedsArr.filter(breed => {
      return breed.startsWith(event.target.value)
    })
    breedList.innerHTML = ""
    filteredArr.forEach((breed) => {
        breedList.innerHTML += `<li data-info="breed">${breed}</li>`
    })
    })
        
    })

})