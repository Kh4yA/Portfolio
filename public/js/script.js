import Swiper from "../../node_modules/swiper/swiper-bundle.mjs"

let openBurger = document.getElementById('open-burger')
let burger = document.querySelector('.burger')
let sommary = document.querySelector('.sommary')
let btnNeon = document.getElementById('checkbox')
let dev = document.querySelector('.dev')
let btnLegends = document.querySelectorAll('.btn')
let competence = document.querySelector('.competence')
let projet = document.querySelector('.projet')
btnLegends.forEach(btn => {
    btn.addEventListener('mouseover', ()=>{
        btn.classList.add('bg-color')
    })
    btn.addEventListener('mouseout', ()=>{
        btn.classList.remove('bg-color')
    })
});
openBurger.addEventListener('click', ()=>{
    burger.classList.toggle('open')
    sommary.classList.toggle('active')

})
btnNeon.addEventListener('click',()=>{
    dev.classList.toggle('neon-allume-text')
    competence.classList.toggle('neon-allume-box')
    projet.classList.toggle('neon-allume-box')
})

const swiper = new Swiper('.swiper', {
    effect: 'cards',
    cardsEffect: {
      // ...
    },
  });