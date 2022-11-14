const btn = document.querySelector(".btn")
const mudaCor = document.querySelector(".container")

btn.addEventListener("click", () =>{
    mudaCor.classList.toggle("container__black")
})