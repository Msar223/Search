const result =document.getElementById("result");
const filter = document.getElementById("filter");

const listItems =[];
console.log("i am good");
getData()

filter.addEventListener("input", (e)=>filterData(e.target.value))

async function getData() {
    const res= await fetch('https://randomuser.me/api?results=100')

    const data =await res.json();
    console.log(data);
    result.innerHTML="";
    data.results.forEach( (user)=>{
        const li= document.createElement("li");

        listItems.push(li)
        
        li.innerHTML=`
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city} ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
       
        
    })
}

function filterData(input) {
    console.log(input);
    listItems.forEach(item=>{
        if (item.innerText.toLowerCase().includes(input.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide")
        }
    })
}