/* Hamburger */

import {
  openAndCloseHamburgerMenu,
  handleScroll,
  carouselFunctionality
} from "./utils.js";


window.addEventListener("scroll", handleScroll);



/* CAROUSEL */

/* API call and create HTML */

const sliderContainer = document.querySelector(".blogs_container")
let html = ""

async function getData() {
  sliderContainer.innerHTML = `<div class="loading_icon"></div>`

  const response = await fetch("https://jonast.site/exam/wp-json/wp/v2/blogs?acf_format=standard");
  const json = await response.json();
  console.log(json)

  for (let i = 0; i < 6; i++) {
    html += `
        <a href = "/blog_details.html?id=${json[i].id}" class="blogs">
        <div class="img_container">
        <p class = "recipe_name">${json[i].acf.h1}</p>
          <img src="${json[i].acf.mainimg}" alt="${json[i].acf.h1}">
        </div>
      </a>
`
    sliderContainer.innerHTML = `
        <i class="fa-solid fa-angle-right fa-5x next carousel_nav"></i>
        <i class="fa-solid fa-angle-left fa-5x prev carousel_nav"></i>` + html;

    carouselFunctionality()

  }

}
getData()


