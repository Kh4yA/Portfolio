import Swiper from "../../node_modules/swiper/swiper-bundle.mjs"

let openBurger = document.getElementById('open-burger')
let burger = document.querySelector('.burger')
let sommary = document.querySelector('.sommary')
let btnLegends = document.querySelectorAll('.btn')
let acceuil = document.getElementById('acceuil')
let btnAcceuil = document.getElementById('btnAcceuil')
let competence = document.getElementById('competences')
let btnCompetence = document.getElementById('btnCompetence')
let projet = document.getElementById('project')
let btnProjet = document.getElementById('btnProject')
let contact = document.getElementById('contact')
let btnContact = document.getElementById('btnContact')
let scrollDown = document.querySelector('.scroll')
let inputs = document.querySelectorAll('input')
let textarea = document.querySelector('textarea')
let photoMoi = document.querySelector('.img-moi')
for (let i =0;i<inputs.length;i++){
  let input = inputs[i]
  input.addEventListener('input', (e)=>{
    if(e.target.value !== ""){
      e.target.parentNode.classList.add('animation')
    }else if (e.target.value === ""){
      e.target.parentNode.classList.remove('animation')
    }
  })
}
textarea.addEventListener('input', (e)=>{
  if(e.target.value !== ""){
    e.target.parentNode.classList.add('animation')
  }else if (e.target.value === ""){
    e.target.parentNode.classList.remove('animation')
}})
/**
 * Function qui ajout une classe au bouton et modifie le text
 * @param {string} name1 
 * @param {string} name2 
 * @param {string} class2 
 * @param {string} class2 
 * @param {string} text 
 * return rien
 */
function modifBtnActive (name1, name2 ,class1, class2, text) {
  name1.classList.add(class1, class2)
  name2.innerText = text
}
/**
 * Function qui retire la classe active et qui modifie le texte
 * @param {string} name1 
 * @param {string} name2 
 * @param {string} class1 
 * @param {string} class2 
 * @param {string} text 
 * return rien
 */
function modifBtnRemove (name1, name2,class1, class2, text) {
  name1.classList.remove(class1, class2)
  name2.innerText = text
}
openBurger.addEventListener('click',()=>{
  burger.classList.toggle('open')
  sommary.classList.toggle('active')
})

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

//Animation
const ratio = .2
let options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

let animatIntersect = function (entries, observer) {
  entries.forEach((entry, pos) => {
    console.log(entry.intersectionRatio);
    if (entry.target.id === "sectionAccueil" && entry.isIntersecting && entry.intersectionRatio) {
      modifBtnActive(btnAcceuil,acceuil,"bg-color","btn-oval","Acceuil")
      modifBtnRemove(btnCompetence,competence,"bg-color","btn-oval","2")
      modifBtnRemove(btnProjet,projet,"bg-color","btn-oval","3")
      modifBtnRemove(btnContact,contact,"bg-color","btn-oval","4")
      scrollDown.classList.remove('d-none')
      photoMoi.classList.remove('reduit')
    } else if (entry.target.id === 'sectionCompetence' && entry.isIntersecting) {
      modifBtnRemove(btnAcceuil, acceuil,"bg-color","btn-oval","1")
      modifBtnActive(btnCompetence,competence,"bg-color","btn-oval","Technologies")
      modifBtnRemove(btnProjet,projet,"bg-color","btn-oval","3")
      modifBtnRemove(btnContact,contact,"bg-color","btn-oval","4")
      scrollDown.classList.remove('d-none')
      photoMoi.classList.add('reduit')
    } else if (entry.target.id === 'sectionProjet' && entry.isIntersecting) {
      modifBtnRemove(btnAcceuil, acceuil,"bg-color","btn-oval","1")
      modifBtnRemove(btnCompetence,competence,"bg-color","btn-oval","2")
      modifBtnRemove(btnContact,contact,"bg-color","btn-oval","4")
      modifBtnActive(btnProjet,projet,'bg-color', 'btn-oval','Projets')
      scrollDown.classList.remove('d-none')
      photoMoi.classList.add('reduit')
    }else if (entry.target.id === 'sectionContact' && entry.isIntersecting){
      console.log(entry.target);
      modifBtnRemove(btnAcceuil, acceuil,"bg-color","btn-oval","1")
      modifBtnRemove(btnCompetence,competence,"bg-color","btn-oval","2")
      modifBtnRemove(btnProjet,projet,"bg-color","btn-oval","3")
      modifBtnActive(btnContact,contact,'bg-color', 'btn-oval','Contact')
      scrollDown.classList.remove('d-none')
      photoMoi.classList.add('reduit')
    }else if(entry.target.id === 'sectionFooter' && entry.isIntersecting){
      scrollDown.classList.add('d-none')
    }
  })
}
let observer = new IntersectionObserver(animatIntersect, options);
observer.observe(document.getElementById('sectionAccueil'))
observer.observe(document.getElementById('sectionCompetence'))
observer.observe(document.getElementById('sectionProjet'))
observer.observe(document.getElementById('sectionContact'))
observer.observe(document.getElementById('sectionFooter'))



