// create  a portfolio tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove(".p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // to find the number in data attr

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn-${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// scroll to top button


const heroSection = document.querySelector(".hero-section");
const footerElem = document.querySelector(".footer-section");


const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");


scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-up"></ion-icon>`;


footerElem.after(scrollElement);

const scrollTop = () =>{
    heroSection.scrollIntoView({behavior:"smooth"});
}

scrollElement.addEventListener("click", scrollTop);
