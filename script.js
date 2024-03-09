let openBurger = document.getElementById('open-burger')
let burger = document.querySelector('.burger')
let sommary = document.querySelector('.sommary')

let acceuil = document.getElementById('acceuil')
acceuil.addEventListener('mouseover', (e)=>{
console.log(e);
})
openBurger.addEventListener('click', ()=>{
    burger.classList.toggle('open')
    sommary.classList.toggle('active')

})