/* Hamburger-menu */
const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".ul_li");

hamburgerMenu.addEventListener("click", openAndCloseHamburgerMenu)

export function openAndCloseHamburgerMenu() {
    hamburgerMenu.classList.toggle("active")

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none"
    } else {
        navMenu.style.display = "block"

    }
}

/* Nav background on scroll HOME BLOGS */

const nav = document.querySelector(".fixed_scroll");

// const noScroll = document.querySelector(".nav_noscroll")

export function handleScroll() {

    const scrolledY = window.scrollY;

    if (scrolledY > 0) {
        nav.classList.remove("transparent_nav_color")
        nav.classList.add("nav_scroll");
        nav.classList.remove("nav_noscroll")
    } if (scrolledY === 0) {
        nav.classList.add("nav_noscroll");
    }
}



/* BLOGS */

let html = ""

export function populateContainerWithBlogs(blogs, container) {
    container.innerHTML = `<div class="loading_icon"></div>`

    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            html += `
              <a href="/blog_details.html?id=${blogs[i].id}" class="blogs-content content">
              <div class="blogs-image image blogs-image-left">
              <img class="blogs_main_img" src="${blogs[i].acf.mainimg}" alt="${blogs[i].acf.h1} preview"/>
              <p class = "recipe_name">${blogs[i].acf.h1}</p>
              </div>
              <div class="blogs-text text blogs-text-left">
                <p class="blogs-text-title">${blogs[i].acf.h1}</p>
                <p>
                  ${blogs[i].acf.intro}
                </p>
              </div>
            </a>
              `;
        } else {
            html += `
              <a href="/blog_details.html?id=${blogs[i].id}" class="blogs-content content">
  
              <div class="blogs-text text blogs-text-right">
                <p class="blogs-text-title">${blogs[i].acf.h1}</p>
                <p>
                  ${blogs[i].acf.intro}
                </p>
              </div>
              <div class="blogs-image image blogs-image-right">
              <img class="blogs_main_img" src="${blogs[i].acf.mainimg}" alt="${blogs[i].acf.h1} preview"/>
              <p class = "recipe_name">${blogs[i].acf.h1}</p>
  
              </div>
  
            </a>
              `;
        }
        container.innerHTML = html;
    }


    for (let i = 8; i < 11; i++) {
        if (i % 2 == 0) {
            container.innerHTML += `
            <a href="/blog_details.html?id=${blogs[i].id}" class="blogs-content content view_more">
            <div class="blogs-image image blogs-image-left">
            <img class="blogs_main_img" src="${blogs[i].acf.mainimg}" alt="${blogs[i].acf.h1} preview"/>
            <p class = "recipe_name">${blogs[i].acf.h1}</p>
            </div>
            <div class="blogs-text text blogs-text-left">
              <p class="blogs-text-title">${blogs[i].acf.h1}</p>
              <p>
                ${blogs[i].acf.intro}
              </p>
            </div>
          </a>
            `;
        } else {
            container.innerHTML += `
            <a href="/blog_details.html?id=${blogs[i].id}" class="blogs-content content view_more">

            <div class="blogs-text text blogs-text-right">
              <p class="blogs-text-title">${blogs[i].acf.h1}</p>
              <p>
                ${blogs[i].acf.intro}
              </p>
            </div>
            <div class="blogs-image image blogs-image-right">
            <img class="blogs_main_img" src="${blogs[i].acf.mainimg}" alt="${blogs[i].acf.h1} preview"/>
            <p class = "recipe_name">${blogs[i].acf.h1}</p>

            </div>

          </a>
            `;
        }
    }
    const displayMoreBlogsButton = document.querySelector(".display_more_blogs")




    displayMoreBlogsButton.addEventListener("click", () => {
        const blogsContent = document.querySelectorAll(".view_more");
        displayMoreBlogsButton.style.display = "none"

        for (let i = 0; i < blogsContent.length; i++) {
            blogsContent[i].style.display = "grid"
        }

    })

}



export function createBlogsHtml() {

    const noText = document.querySelector(".no_text_button");
    const withText = document.querySelector(".text_button");
    const blogsImage = document.querySelectorAll(".image");
    const blogsContent = document.querySelectorAll(".content");
    const blogsText = document.querySelectorAll(".text");
    const blogsContainer = document.querySelectorAll(".blogs_container");
    const recipeName = document.querySelectorAll(".recipe_name")



    /* Display images only */

    noText.addEventListener("click", () => {

        noText.style.color = "black"
        withText.style.color = "grey"
        for (let i = 0; i < blogsContent.length; i++) {
            blogsContent[i].classList.replace(
                "blogs-content",
                "blogs-content_notext"
            );
        }
        for (let x = 0; x < blogsImage.length; x++) {
            blogsImage[x].classList.replace("blogs-image", "blogs-image_notext");

        }
        for (let a = 0; a < blogsContainer.length; a++) {
            blogsContainer[a].classList.replace(
                "blogs_container",
                "blogs_container_notext"
            );
        }
        for (let z = 0; z < blogsText.length; z++) {
            blogsText[z].classList.replace("blogs-text", "blogs-text_notext");
        }
        for (let c = 0; c < recipeName.length; c++) {
            recipeName[c].style.display = "block"
        }
    });

    /* Display text and images */

    withText.addEventListener("click", () => {
        noText.style.color = "grey"
        withText.style.color = "black"
        for (let i = 0; i < blogsContent.length; i++) {
            blogsContent[i].classList.replace(
                "blogs-content_notext",
                "blogs-content"
            );
        }
        for (let x = 0; x < blogsImage.length; x++) {
            blogsImage[x].classList.replace("blogs-image_notext", "blogs-image");

        }
        for (let a = 0; a < blogsContainer.length; a++) {
            blogsContainer[a].classList.replace(
                "blogs_container_notext",
                "blogs_container"
            );
        }
        for (let z = 0; z < blogsText.length; z++) {
            blogsText[z].classList.replace("blogs-text_notext", "blogs-text");
        }
        for (let c = 0; c < recipeName.length; c++) {
            recipeName[c].style.display = "none"
        }
    });

}


/* INDEX  */

export function carouselFunctionality() {

    const slides = document.querySelectorAll(".blogs")
    const nextBtn = document.querySelector(".next")
    const prevBtn = document.querySelector(".prev")


    let counter = 0;
    nextBtn.addEventListener("click", () => {
        console.log(nextBtn)
        counter++;
        carouselFunctionality()
    })
    prevBtn.addEventListener("click", () => {
        counter--;
        carouselFunctionality()
    })

    function carouselFunctionality() {
        if (counter > 3) {
            counter = 0;
        }

        if (counter === -1) {
            counter = 3;
        }
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        })

        console.log(counter)
    }
}


/* MODAL BLOG DETAILS */

export function openModal() {
    const modal = document.querySelector(".modal")
    const previews = document.querySelectorAll(".section1_small_img")
    const original = document.querySelector(".modal_img")


    previews.forEach(preview => {
        preview.addEventListener("click", () => {
            modal.classList.add("open");

            const originalSrc = preview.getAttribute("data-original");
            original.src = `${originalSrc}`
        })
    })
}

export function closeModal() {
    const modal = document.querySelector(".modal")

    modal.addEventListener("click", (x) => {
        if (x.target.classList.contains("modal")) {
            modal.classList.remove("open")

        }
    })

}


/* Search functionality */

const searchbar = document.querySelector(".searchbar")

let recipeNamesArray = []





export async function searchFunctionality() {
    const blogsContent = document.querySelectorAll(".content");
    const noSearchResults = document.querySelector(".no_search_results")


    const response = await fetch("https://jonast.site/exam/wp-json/wp/v2/blogs?acf_format=standard");
    const blogs = await response.json();
    for (let i = 0; i < blogs.length; i++) {
        const pushRecipeNamesToArray = { name: `${blogs[i].acf.h1}` }
        recipeNamesArray.push(pushRecipeNamesToArray)
    }
    searchbar.addEventListener("input", (e) => {
        const searchInput = e.target.value
        console.log(searchInput)
        for (let i = 0; i < recipeNamesArray.length; i++) {
            if (recipeNamesArray[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
                blogsContent[i].style.display = "grid"

            } if (!recipeNamesArray[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
                console.log(noSearchResults)
                blogsContent[i].style.display = "none"

            }
        }
    }
    )
}