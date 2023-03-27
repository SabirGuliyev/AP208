const row=document.getElementsByClassName("row")[0]


const bands=[
    {
        name:"Nirvana",
        img:"https://townsquare.media/site/366/files/2014/11/Nirvana.jpg?w=980&q=75",
        country:"America"
    },
    {
        name:"Metallica",
        img:"https://m.media-amazon.com/images/M/MV5BZTNmNThlNzUtMTFkMS00ZTk3LWEyNjQtNGUyZWM1OGJhNjQzXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_FMjpg_UX1000_.jpg",
        country:"America"
    },
    {
        name:"AC/DC",
        img:"https://i.guim.co.uk/img/media/663df4ca465081b796ad837755286ce87c8eaaa7/475_93_6066_3640/master/6066.jpg?width=1200&quality=85&auto=format&fit=max&s=96972e55adff0e0e730563317745b447",
        country:"Australia"
    }
]

for(let i=0;i<bands.length;i++){
    row.innerHTML+=`<div class="card col-4">
    <img src="${bands[i].img}" class="card-img-top" alt="${bands[i].name}">
    <div class="card-body">
      <h5 class="card-title">Name: ${bands[i].name}</h5>
      <p class="card-text">Country: ${bands[i].country}</p>
    </div>
    </div>`
}

const btn=document.getElementById("create")
const inname=document.getElementById("name")
const img=document.getElementById("img")
const country=document.getElementById("country")


// inname.onkeyup=function(e){console.log(e.target.value)}
//   inname.addEventListener("keyup",function(e){
//     console.log(e.target.value)
//   })

btn.addEventListener("click",function(){
   
    row.innerHTML+=`<div class="card col-4">
    <img src="${img.value}" class="card-img-top" alt="${inname.value}">
    <div class="card-body">
      <h5 class="card-title">Name: ${inname.value}</h5>
      <p class="card-text">Country: ${country.value}</p>
    </div>
    </div>`



    // if(img.value.trim().length==0){
    //     console.log("Bosh gondermek olmaz")
    // }
    // else{
        // var band={
        //     name:inname.value,
        //     img:img.value,
        //     country:country.value
        // }
        
        // bands.push(band)
    // }


})

// btn.onclick=function(){
    
// }



const cards=document.getElementsByClassName("card")


// for(let i=0;i<cards.length;i++){
//     cards[i].addEventListener("mouseenter",function(){
//         cards[i].classList.add("bg-primary")

//     })

//     cards[i].addEventListener("mouseout",function(){
//         cards[i].classList.remove("bg-primary")

//     })
//     cards[i].addEventListener("mousemove",function(){
//         console.log("Mouse hereket edir")

//     })

// }



