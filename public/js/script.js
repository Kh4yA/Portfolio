let openBurger = document.getElementById('open-burger')
let burger = document.querySelector('.burger')
let sommary = document.querySelector('.sommary')
let btnNeon = document.getElementById('checkbox')
let dev = document.querySelector('.dev')
let acceuil = document.getElementById('acceuil')
acceuil.addEventListener('mouseover', (e)=>{
console.log(e);
})
openBurger.addEventListener('click', ()=>{
    burger.classList.toggle('open')
    sommary.classList.toggle('active')

})
btnNeon.addEventListener('click',()=>{
    console.log("ok");
    dev.classList.toggle('neon-allume')
})