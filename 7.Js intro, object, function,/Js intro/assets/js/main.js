
// var result=confirm("Kesileceksiz?")
// var word=prompt()


// console.log(a)
// console.log(b)

//primitive
//number
//string
//boolean

//non-primitive
//Object


//1. Literal Object

const person={
    name:"Ali",
    surname:"Safarli",
    age:20
}

//2. Object

const person2=new Object({
    name:"Hakim",
    surname:"Habibli",
    age:19
})

//3. Function-object

function Person(name,surname,age){
    this.name=name
    this.surname=surname
    this.age=age
}

//4.Class Object
// class Person{
//     constructor(name, surname, age){
//       this.name=name
//     }
// }

const person3=new Person("Pehman","Huseynzade",20)
const person4=new Person("Ali","Tagizade",20)





// function SayHello(){
//     console.log("Salam gencler")
// }

// function Calculate(num,num2=10){

    
//     console.log(num+num2)
// }

// function Sum(num,num2){
//     return num+num2
// }
// console.log(Sum(5,10))
// var result=Sum(5,10)
// console.log(result)
// SayHello()
// SayHello()
// Calculate(50,30)


// var calculate=function(num,num2){
//  console.log(num+num2)
// }

// var Arrow=(num,num2)=>num+num2


// function CheckAge(birth,year){

//    if(year-birth>=18){

//     return true
//    }
//    else{
//     return false
//    }
// }
// console.log(Arrow(5,10))
// var result=CheckAge(2020,2023)


// calculate(5,10)




const div=document.getElementById("div1")
// const divClass=document.getElementsByClassName("test")[0]

// const divQuery=document.querySelector("#div1")


// div.innerText="<p>Hakim heqqi get yat</p>"
// div.innerHTML+="<p>Hakim heqqi get yat</p>"

// const hTag=document.createElement("h1")
// const text=document.createTextNode("Hakim yatma")

// hTag.style.color="red"
// hTag.classList.add("large")



// hTag.appendChild(text)
// div.appendChild(hTag)

const people=[person,person2,person3,person4]


const ul=document.querySelector("ul")

for(let i=0;i<people.length;i++){

    ul.innerHTML+=`
    <li>${people[i].name} ${people[i].surname}</li>
   `
}


























