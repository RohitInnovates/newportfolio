// role

var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer",
    "Web Developer",
    "UI-UX Designer",
    "Backend Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

// create  a portfolio tabbed component

const heroSection = document.querySelector(".hero-section");
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

// crete sticky navbar

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  { root: null, threshold: 0 }
);

observer.observe(heroSection);


/// ========================================
//  animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 4;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);




// scroll to top button

const footerElem = document.querySelector(".footer-section");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-up"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);


//  swiper js code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  // autoplay: {
  //   delay:2500,
  //   // disableOnInteraction:false;
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
