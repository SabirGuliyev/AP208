const body=document.querySelector("body")

const table=document.createElement("table")
const thead=document.createElement("thead")
const trHead=document.createElement("tr")
const thName=document.createElement("th")
const thSurname=document.createElement("th")
const thAge=document.createElement("th")

thName.innerText="Name"

const surnameText=document.createTextNode("Surname")
const ageText=document.createTextNode("Age")

thSurname.appendChild(surnameText)
thAge.appendChild(ageText)

trHead.appendChild(thName)
trHead.appendChild(thSurname)
trHead.appendChild(thAge)

thead.appendChild(trHead)
table.appendChild(thead)





body.appendChild(table)

const tbody=document.createElement("tbody")

const people=[
    {
        name:"Hakim",
        surname:"Habibli",
        age:13
    },
    {
        name:"Ali",
        surname:"Safarli",
        age:29
    },
    {
        name:"Pehman",
        surname:"Huseynzade",
        age:20
    }
]

for(let i=0;i<people.length;i++){
    let tr=document.createElement("tr")
    let tdName=document.createElement("td")
    let tdSurname=document.createElement("td")
    let tdAge=document.createElement("td")

    tdName.innerText=people[i].name
    tdSurname.innerText=people[i].surname
    tdAge.innerText=people[i].age

    tr.appendChild(tdName)
    tr.appendChild(tdSurname)
    tr.appendChild(tdAge)

    tbody.appendChild(tr)
}

table.appendChild(tbody)




