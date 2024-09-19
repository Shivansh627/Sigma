let div = document.createElement("div")
div.setAttribute("class", "shiv")
document.querySelector(".cont").append(div)
let d = document.querySelector(".shiv")

d.style.backgroundColor = "black"
d.style.height = "12vh"
d.style.width = "12vw"

let c=document.querySelector(".cont")

c.insertAdjacentHTML("afterbegin","<span>I am Shivansh</span>")

let bb= document.getElementById("but")

bb.addEventListener("mouseover",()=>{
    c.textContent="Hi Shivansh"
})

