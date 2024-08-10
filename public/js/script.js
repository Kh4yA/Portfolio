import Swiper from "../../node_modules/swiper/swiper-bundle.mjs"
//import de mes
const openBurger = document.getElementById('open-burger')
const burger = document.querySelector('.burger')
const sommary = document.querySelector('.sommary')
const accueil = document.getElementById('accueil')
const btnAccueil = document.getElementById('btnAccueil')
const competence = document.getElementById('competences')
const btnCompetence = document.getElementById('btnCompetence')
const projet = document.getElementById('project')
const btnProjet = document.getElementById('btnProject')
const contact = document.getElementById('contact')
const btnContact = document.getElementById('btnContact')
const scrollDown = document.querySelector('.scroll')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const templateProjetFront = document.querySelector('.template-projet-front')
const templateProjetBack = document.querySelector('.template-projet-back')
const body = document.querySelector("body");
const header = document.getElementById('header')
const darkMode = document.getElementById('switch')
const parallax = document.getElementById("parallax");

// PARALLAX
// si l'ecran est superieur a 900px alors on jour le paralax sinon non
let lastKnownScrollPosition = 0;
let ticking = false;

function doParallax(scrollPos) {
  const parallax = document.getElementById("parallax");
  if (window.innerWidth < 900) {
    parallax.style.backgroundPositionY = scrollPos / 1.4 + "px";
  } else {
    parallax.style.backgroundPositionY = scrollPos / 1.3 + "px";
  }
}

window.addEventListener("scroll", function () {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doParallax(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
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
            <h3 class="padding-bottom text-center">${data.nom}</h3>
            <p class="padding-bottom text-center">${data.date}</p>
            <p class="padding-bottom text-center"><a href="${data.lien}" target="_blank"><span class="lien-projet">Lien vers le projet ICI</span></a></p>
            <div class="logo-techno padding20px flex justify-center">
              <P class="padding-bottom text-center width100">Les technologies utilisées</P>
              ${data.techno.image1 ? `<img class="width24px" src="./public/img/${data.techno.image1}" alt="logo des techno utilsé" ></img>` : ''}
              ${data.techno.image2 ? `<img class="width24px" src="./public/img/${data.techno.image2}" alt="logo des techno utilsé" ></img>` : ''}
              ${data.techno.image3 ? `<img class="width24px" src="./public/img/${data.techno.image3}" alt="logo des techno utilsé" ></img>` : ''}
              ${data.techno.image4 ? `<img class="width24px" src="./public/img/${data.techno.image4}" alt="logo des techno utilsé" ></img>` : ''}
            </div>
              ${data.info ? `<p class="padding-bottom text-center"><span class="color-yellow">&#9432; </span>${data.info}</p>` : ""}
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
            <h3 class="padding-bottom text-center width100">${data.nom}</h3>
            <p class="padding-bottom text-center width100">${data.date}</p>
            <p class="padding-bottom text-center width100"><a href="${data.lien}" target="_blank"><span class="lien-projet">Lien vers le code source sur git ICI</span></a></p>
            <div class="logo-techno padding20px flex justify-center">
              <P class="padding-bottom text-center width100">Les technologies utilisées</P>
              ${data.techno.image1 ? `<img class="width24px" src="./public/img/${data.techno.image1}" alt="logo des techno utilsé" ></img>` : ''}
              ${data.techno.image2 ? `<img class="width24px" src="./public/img/${data.techno.image2}" alt="logo des techno utilsé" ></img>` : ''}
              ${data.techno.image3 ? `<img class="width24px" src="./public/img/${data.techno.image3}" alt="logo des techno utilsé" ></img>` : ''}
              ${data.techno.image4 ? `<img class="width24px" src="./public/img/${data.techno.image4}" alt="logo des techno utilsé" ></img>` : ''}
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
btnChoiceFront.addEventListener("click", (e) => {
  cardSwiper1.classList.add("d-none")
  btnChoiceFront.classList.add("add-color-secondary")
  btnChoiceBack.classList.remove("add-color-secondary")
  cardSwiper2.classList.remove("d-none")
})
btnChoiceBack.addEventListener("click", (e) => {
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
    if (entry.target.id === 'sectionTechnologie' && entry.isIntersecting) {
      header.classList.add('blur')
      console.log("on ajoute blur");
    }
    if (entry.target.id === "sectionAccueil" && entry.isIntersecting && entry.intersectionRatio) {
      modifBtnActive(btnAccueil, accueil, "bg-color", "btn-oval", "Accueil")
      modifBtnRemove(btnCompetence, competence, "bg-color", "btn-oval", "2")
      modifBtnRemove(btnProjet, projet, "bg-color", "btn-oval", "3")
      modifBtnRemove(btnContact, contact, "bg-color", "btn-oval", "4")
      header.classList.remove('blur')
      scrollDown.classList.remove('d-none')
    } else if (entry.target.id === 'sectionCompetence' && entry.isIntersecting) {
      modifBtnRemove(btnAccueil, accueil, "bg-color", "btn-oval", "1")
      modifBtnActive(btnCompetence, competence, "bg-color", "btn-oval", "Services")
      modifBtnRemove(btnProjet, projet, "bg-color", "btn-oval", "3")
      modifBtnRemove(btnContact, contact, "bg-color", "btn-oval", "4")
      scrollDown.classList.remove('d-none')
    } else if (entry.target.id === 'sectionProjet' && entry.isIntersecting) {
      modifBtnRemove(btnAccueil, accueil, "bg-color", "btn-oval", "1")
      modifBtnRemove(btnCompetence, competence, "bg-color", "btn-oval", "2")
      modifBtnRemove(btnContact, contact, "bg-color", "btn-oval", "4")
      modifBtnActive(btnProjet, projet, 'bg-color', 'btn-oval', 'Projets')
      scrollDown.classList.remove('d-none')
    } else if (entry.target.id === 'sectionContact' && entry.isIntersecting) {
      modifBtnRemove(btnAccueil, accueil, "bg-color", "btn-oval", "1")
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
    if (entry.intersectionRatio > ratio) {
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
observer.observe(document.getElementById('sectionTechnologie'))
let observer2 = new IntersectionObserver(animeIntersect, options);
document.querySelectorAll(".anime").forEach(a => {
  observer2.observe(a)
})

