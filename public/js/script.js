import Swiper from "../../node_modules/swiper/swiper-bundle.mjs"
//import de mes
let openBurger = document.getElementById('open-burger')
let burger = document.querySelector('.burger')
let sommary = document.querySelector('.sommary')
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
let templateProjetFront = document.querySelector('.template-projet-front')
let templateProjetBack = document.querySelector('.template-projet-back')
const body = document.querySelector("body");
// PARALLAX
window.addEventListener("scroll", () => {
  const parallax = document.getElementById("parallax");
  // je veux que la position de parallax par defaut soit centrer au debut du parallax
  // si l'ecran est superieur a 600px alors on jour le paralax sinon non
  if (window.innerWidth > 900) {
    parallax.style.backgroundPositionY = window.scrollY / 1.3 + "px"
  }else if(window.innerWidth < 900){
    parallax.classList.remove('parallax')
  }
})

/**
 * animation, des inputs 
 */
for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i]
  input.addEventListener('input', (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add('animation')
    } else if (e.target.value === "") {
      e.target.parentNode.classList.remove('animation')
    }
  })
}
textarea.addEventListener('input', (e) => {
  if (e.target.value !== "") {
    e.target.parentNode.classList.add('animation')
  } else if (e.target.value === "") {
    e.target.parentNode.classList.remove('animation')
  }
})
/**
 * Function qui ajout une classe au bouton et modifie le text
 * @param {string} name1 
 * @param {string} name2 
 * @param {string} class2 
 * @param {string} class2 
 * @param {string} text 
 * return rien
 */
function modifBtnActive(name1, name2, class1, class2, text) {
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
function modifBtnRemove(name1, name2, class1, class2, text) {
  name1.classList.remove(class1, class2)
  name2.innerText = text
}
/**
 * ANIMATION DU MENU BURGER
 */
openBurger.addEventListener('click', () => {
  burger.classList.toggle('open')
  sommary.classList.toggle('active')
})
/**
 * SWIPER POUR LA CATEGORIR PROJET
 */

function createSwiper(selector) {
  return new Swiper(selector, {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

let swiper1 = createSwiper(".mySwiper1");
let swiper2 = createSwiper(".mySwiper2");
/**
 * AJAX
 */
fetch("./public/projet.JSON").then(rep => {
  return rep.json()
}).then(datas => {
  console.log(datas.backEnd);
  buildTemplateProjetFront(datas.frontEnd)
  buildTemplateProjetBack(datas.backEnd)
})
const buildTemplateProjetFront = (datas) => {
  datas.forEach(data => {
    templateProjetBack.innerHTML +=
      `<div class="swiper-slide">
        <div class="projet flex space-between">
          <div class="image-card">
            <div class="large-12"><img src="public/img/${data.photo}" alt="image de ${data.nom}"></div>
          </div>
          <div class="content-card">
            <h3 class="padding-bottom">${data.nom}</h3>
            <p class="padding-bottom">${data.date}</p>
            <p class="padding-bottom"><a href="${data.lien}" target="_blank"><span class="lien-projet">Lien vers le projet ICI</span></a></p>
            <div class="logo-techno">
              <P class="">Les technologies utilisées</P>
              <img class="width24px" src="./public/img/${data.techno.image1}" alt="logo des techno utilsé" >
              <img class="width24px" src="./public/img/${data.techno.image2}" alt="logo des techno utilsé" >
              <img class="width24px" src="./public/img/${data.techno.image3}" alt="logo des techno utilsé" >
              <img class="width24px" src="./public/img/${data.techno.image4}" alt="logo des techno utilsé" >
            </div>
            <p class="">${data.description}<br></p>
          </div>
        </div>
      </div>
`
  })
}
const buildTemplateProjetBack = (datas) => {
  datas.forEach(data => {
    templateProjetFront.innerHTML +=
      `<div class="swiper-slide">
        <div class="projet flex space-between">
          <div class="image-card">
            <div class="large-12"><img src="public/img/${data.photo}" alt="image de ${data.nom}"></div>
          </div>
          <div class="content-card">
            <h3 class="padding-bottom">${data.nom}</h3>
            <p class="padding-bottom">${data.date}</p>
            <p class="padding-bottom"><a href="${data.lien}" target="_blank"><span class="lien-projet">Lien vers le code source sur git ICI</span></a></p>
            <div class="logo-techno">
              <P class="">Les technologies utilisées</P>
              <img class="width24px" src="./public/img/${data.techno.image1}" alt="logo des techno utilsé" >
              <img class="width24px" src="./public/img/${data.techno.image2}" alt="logo des techno utilsé" >
              <img class="width24px" src="./public/img/${data.techno.image3}" alt="logo des techno utilsé" >
              <img class="width24px" src="./public/img/${data.techno.image4}" alt="logo des techno utilsé" >
            </div>
            <p class="">${data.description}<br></p>
          </div>
        </div>
      </div>
`
  })
}
//MES PROJET
const cardSwiper1 = document.querySelector(".card-swiper1")
const cardSwiper2 = document.querySelector(".card-swiper2")
const btnChoiceFront = document.getElementById("btn-choice-front")
const btnChoiceBack = document.getElementById("btn-choice-back")
btnChoiceFront.addEventListener("click", (e)=>{
    cardSwiper1.classList.add("d-none")
    btnChoiceFront.classList.add("add-color-secondary")
    btnChoiceBack.classList.remove("add-color-secondary")
    cardSwiper2.classList.remove("d-none")
})
btnChoiceBack.addEventListener("click", (e)=>{
  cardSwiper1.classList.remove("d-none")
  btnChoiceBack.classList.add("add-color-secondary")
  btnChoiceFront.classList.remove("add-color-secondary")
  cardSwiper2.classList.add("d-none")

})

//ANIMATION INTERSECTION OBSERVER
const ratio = .2
let options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};
/**
 * 
 * @param {*elementHTML} entries 
 * @param {*} observer 
 */
let handleIntersect = function (entries, observer) {
  entries.forEach((entry, pos) => {
    console.log(entry.intersectionRatio);
    if (entry.target.id === "sectionAccueil" && entry.isIntersecting && entry.intersectionRatio) {
      modifBtnActive(btnAcceuil, acceuil, "bg-color", "btn-oval", "Accueil")
      modifBtnRemove(btnCompetence, competence, "bg-color", "btn-oval", "2")
      modifBtnRemove(btnProjet, projet, "bg-color", "btn-oval", "3")
      modifBtnRemove(btnContact, contact, "bg-color", "btn-oval", "4")
      scrollDown.classList.remove('d-none')
    } else if (entry.target.id === 'sectionCompetence' && entry.isIntersecting) {
      modifBtnRemove(btnAcceuil, acceuil, "bg-color", "btn-oval", "1")
      modifBtnActive(btnCompetence, competence, "bg-color", "btn-oval", "Services")
      modifBtnRemove(btnProjet, projet, "bg-color", "btn-oval", "3")
      modifBtnRemove(btnContact, contact, "bg-color", "btn-oval", "4")
      scrollDown.classList.remove('d-none')
    } else if (entry.target.id === 'sectionProjet' && entry.isIntersecting) {
      modifBtnRemove(btnAcceuil, acceuil, "bg-color", "btn-oval", "1")
      modifBtnRemove(btnCompetence, competence, "bg-color", "btn-oval", "2")
      modifBtnRemove(btnContact, contact, "bg-color", "btn-oval", "4")
      modifBtnActive(btnProjet, projet, 'bg-color', 'btn-oval', 'Projets')
      scrollDown.classList.remove('d-none')
    } else if (entry.target.id === 'sectionContact' && entry.isIntersecting) {
      console.log(entry.target);
      modifBtnRemove(btnAcceuil, acceuil, "bg-color", "btn-oval", "1")
      modifBtnRemove(btnCompetence, competence, "bg-color", "btn-oval", "2")
      modifBtnRemove(btnProjet, projet, "bg-color", "btn-oval", "3")
      modifBtnActive(btnContact, contact, 'bg-color', 'btn-oval', 'Contact')
      scrollDown.classList.remove('d-none')
    } else if (entry.target.id === 'sectionFooter' && entry.isIntersecting) {
      scrollDown.classList.add('d-none')
    }
  })
}
let animeIntersect = function (entries, observer) {
  entries.forEach((entry, pos) => {
    console.log(entry.intersectionRatio);
    if(entry.intersectionRatio > ratio){
      entry.target.classList.add('anime-visible')
    }
  })
}

let observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.getElementById('sectionAccueil'))
observer.observe(document.getElementById('sectionCompetence'))
observer.observe(document.getElementById('sectionProjet'))
observer.observe(document.getElementById('sectionContact'))
observer.observe(document.getElementById('sectionFooter'))
let observer2 = new IntersectionObserver(animeIntersect, options);
document.querySelectorAll(".anime").forEach(a=>{
  console.log(a);
  observer2.observe(a)
})

