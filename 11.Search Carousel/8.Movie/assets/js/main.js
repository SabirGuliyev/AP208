let row = document.querySelector('.row')
const input=document.getElementsByClassName("cus-input")[0]
const btn=document.getElementsByClassName("cus-btn")[0]
btn.addEventListener("click",function(){

  axios.get("https://api.tvmaze.com/search/shows?q="+input.value).then(arr=>{

  row.innerHTML=""

   arr.data.forEach(element=>{
    row.innerHTML+=`<div class="col-4 py-3">
    <div class="card" style="width: 18rem;">
      <img src="${element.show.image?.medium}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><b>Name</b>:${element.show.name}</h5>
        <p class="card-text"><b>Language</b>:${element.show.language}</p>
        <p class="card-text"><b>Genres</b>:${element.show.genres}</p>
        <p class="card-text"><b>Imdb</b>:${element.show.externals.imdb}</p>
        <a href="details.html?id=${element.show.id}" class="btn btn-primary">Start waching</a>
      </div>
    </div>
  </div>`

  })


  })
})








// $.ajax({
//   method:"GET",
//   url:"https://api.tvmaze.com/show"
// }).done((response)=>{
//   console.log(response)
// })

$.ajax({
  method:"GET",
  url:"https://api.tvmaze.com/shows"
}).done((data)=>{

   FillHtml(data)
        
})

let inner=document.getElementsByClassName("cus-item")[0]
let btns=document.getElementsByClassName("cus-btns")[0]

function FillHtml(arr){
  let count=0;
  for(let i=0;i<10;i++){
    inner.innerHTML+=`<div class="carousel-item ${count<1?"active":""} ">
    <img src="${arr[i].image.original}" class="d-block w-100" alt="...">
  </div>
  `

  btns.innerHTML+=`<button type="button" data-bs-target="#carouselExampleIndicators" 
  data-bs-slide-to="${count}" class="${count<1?"active":""}" 
  aria-current="${count<1?"true":"false"}" aria-label="Slide ${count+1}"></button>`
  count++
  }

    
  
  
}




// `<div class="col-4 py-3">
//     <div class="card" style="width: 18rem;">
//       <img src="${element.image.medium}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title"><b>Name</b>:${element.name}</h5>
//         <p class="card-text"><b>Language</b>:${element.language}</p>
//         <p class="card-text"><b>Genres</b>:${element.genres}</p>
//         <p class="card-text"><b>Imdb</b>:${element.externals.imdb}</p>
        


//         <a href="details.html?id=${element.id}" class="btn btn-primary">Start waching</a>
//       </div>
//     </div>
//   </div>`

