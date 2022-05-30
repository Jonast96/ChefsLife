import { openModal, closeModal } from "./utils.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const acfFormat = "?acf_format=standard"

const normalUrl = "https://jonast.site/exam/wp-json/wp/v2/blogs/";

const url = normalUrl + id + acfFormat;


const section1Content = document.querySelector(".section1")
const section2Content = document.querySelector(".section2")
const section1SideContent = document.querySelector(".section1_side_content")



async function createSection1() {
  const response = await fetch(url);
  const json = await response.json();

  const response2 = await fetch("https://jonast.site/exam/wp-json/wp/v2/blogs?acf_format=standard");
  const json2 = await response2.json();


  for (let i = 0; i < 4; i++) {
    section1SideContent.innerHTML += `
  <a href="/blog_details.html?id=${json2[i].id}" class="section1_side_img_container">
  
      <img class="section1_side_small_img" src="${json2[i].acf.mainimg}" alt="${json.acf.h1} preview" />

      <div>
      <p class="section1_side_p">${json2[i].acf.h1} </p>
      </div>
  </a>
      `
  }



  section1Content.innerHTML += `
    <div class="section1_main_content">
          <h1>${json.acf.h1}</h1>
          <img class="main_img" src="${json.acf.mainimg}" alt="${json.acf.h1} preview" data-original= "${json.acf.mainimg}" />
          <p class="paragraph1">
          ${json.acf.paragraph1}
          </p>
          <div class="section1_images">
            <div class="section1_img_container">
              <img class="section1_small_img" src="${json.acf.image1}" alt="Ingredient preview" data-original= "${json.acf.image1}" />
            </div>
            <div class="section1_img_container">
              <img class="section1_small_img " src="${json.acf.image2}" alt="Ingredient preview" data-original= "${json.acf.image2}" />
            </div>
            <div class="section1_img_container display_none_mobile">
              <img class="section1_small_img " src="${json.acf.image3}" alt="Ingredient preview" data-original= "${json.acf.image3}" />
            </div>
          </div>
        </div>

        <div class="modal">
        <img class="modal_img" src="${json.acf.image2}" alt="" />
        <p class="modal_p">Click anywhere outside of the image to go back to the blog</p>
      </div>
    `



  openModal()
  closeModal()

}
createSection1("https://jonast.site/exam/wp-json/wp/v2/blogs?acf_format=standard")





async function createSection2() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json)

  section2Content.innerHTML += `

    <div class="section2_main_content">
    <h2>
    ${json.acf.h2}
</h2>
<div class="step_div">
<p class = "step" >Step 1:</p>
<p class="paragraph2">${json.acf.step1}</p>
</div>
<div class="step_div">
<p class = "step" >Step 2:</p>
<p class="paragraph2">${json.acf.step2}</p>
</div>
<div class="step_div">
<p class = "step" >Step 3:</p>
<p class="paragraph2">${json.acf.step3}</p>
</div>
    <div class="section1_images">
      <div class="section2_img_container">
        <img class="section1_small_img" src="${json.acf.image4}" alt="Ingredient preview" data-original="${json.acf.image4}" />
      </div>
      <div class="section2_img_container">
        <img class="section1_small_img" src="${json.acf.image5}" alt="Ingredient preview" data-original="${json.acf.image5}" />
      </div>
    </div>
    <div class="step_div">
    <p class = "step" >Step 4:</p>
    <p class="paragraph2">${json.acf.step1}</p>
    </div>
    <div class="step_div">
<p class = "step" >Step 5:</p>
<p class="paragraph2">${json.acf.step2}</p>
</div>


  </div>

    `

  openModal()
  closeModal()


}

createSection2()




