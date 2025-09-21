const API_KEY = "qUZiM8Zoyx3wFarQXYZnuV8y3SS28JvQYzAR499lnCluT3rWDhJWk8oD"
const input = document.querySelector(".input")
const formBtn = document.querySelector(".search_btn")
let searchText = "";
let search = false;


async function api (){
  const data = await fetch(`https://api.pexels.com/v1/curated`,{
        method:"GET",

    headers:{
      Accept:"application/json",
      Authorization:API_KEY
    }
  })
  const response = await data.json()
  console.log(response);

  displayImage(response)
}

function displayImage (response){
  response.photos.forEach(img => {
      const photo = document.createElement("div")

      photo.innerHTML = `
      <a href=${img.src.large} target="_blank">
    <img class="img" src="${img.src.large}" alt="${img.url}">
<figcaption class="caption">📷: ${img.photographer}</figcaption>
      </a> 
      `
      document.querySelector(".display_images").appendChild(photo)
  });
}


async function searchPhotos(query){
 const data = await fetch(`https://api.pexels.com/v1/search?query=${query}`,{
        method:"GET",

    headers:{
      Accept:"application/json",
      Authorization:API_KEY
    }
  })
  const response = await data.json()
  console.log(response);

  displayImage(response)
}


input.addEventListener("input",(e)=>{
e.preventDefault(),
searchText=e.target.value
})

formBtn.addEventListener("click", () => {
  if(input.value === ""){
    document.querySelector(".alert").innerHTML = "Malumotlarni to'ldir";
  } else {
     document.querySelector(".alert").innerHTML = ""
     clear();
     search = true;
     searchPhotos(searchText)
  }
})

function clear(){
document.querySelector(".display_images").innerHTML = ""
}

api()



























// const API = 'https://restcountries.com/v3.1/alpha/col'


// getData = (resurse) =>{
// return new Promise((resove,reject)=>{
//     let a = document.getElementById("h")
//     const request = new XMLHttpRequest()
      
//     request.addEventListener("readystatechange",()=>{
//       a.innerHTML = request.status

//     })

//     //open
//     request.open('GET',resurse)

//     //send
//     request.send()
// })
// }

// getData(API)