
// const arr=[{
//     name:"Malak",
//     surname:"Mensimova",
//     age:20,
//     course:3,
//     gender:"female",
//     weigth:63
// },
// {
//     name:"Ali",
//     surname:"Safarli",
//     age:20,
//     course:4,
//     gender:"male",
//     weigth:103
// }
// ]
// arr[0].gender
// console.log(arr)

const ul=document.querySelector("ul")


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data=>data.json())
// .then(json=>{
//     for(let i=0;i<json.length;i++){
//         ul.innerHTML+=`
//     <li>
//         <p>Name:${json[i].name}</p>
//         <p>Email:${json[i].email}</p>
//         <p>Phone:${json[i].phone}</p>
//     </li>`
//     }

// })

fetch("https://api.tvmaze.com/shows").then(data=>data.json())
.then(arr=>{
    for(let i=0;i<arr.length;i++){
    ul.innerHTML+=`
<li>
    <p class="text-danger">Name:${arr[i].name}</p>
    <p>Average:${arr[i].averageRuntime}</p>
    <p>  <img src="${arr[i].image.medium}" alt=""></p>
</li>`}})






