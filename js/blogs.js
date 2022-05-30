import {
  openAndCloseHamburgerMenu,
  handleScroll,
  populateContainerWithBlogs,
  createBlogsHtml,
  searchFunctionality
} from "./utils.js";

/* SCROLL FUNCTION */
window.addEventListener("scroll", handleScroll);

/* API FETCH */

const container = document.querySelector(".blogs_container");

let url = "https://jonast.site/exam/wp-json/wp/v2/blogs?acf_format=standard&per_page=20";

async function getBlogsData() {
  try {
    fetch(url)
      .then((data) => displayBlogs(data))
      .catch((error) => console.log("Error:" + error));

  } catch (error) {
    console.log(error);
  }
}

getBlogsData();




/* DISPLAY HTML */

async function displayBlogs(data) {
  const blogs = await data.json();

  populateContainerWithBlogs(blogs, container)

  createBlogsHtml()

  searchFunctionality()


}






