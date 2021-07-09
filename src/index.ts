import "./stylesheet/style.scss";
import nav from "./navbar.html";
import parallax from "./parallax.html";
import slider from "./slider.html";
import scroll from "./scroll_button.html";
import json from "./json/slider_data.json";
import myphoto from "./myphoto.html";

interface Slide {
  id: number;
  text: string;
  image: string;
}

window.onload = function () {
  const translate = document.querySelectorAll<HTMLElement>(".translate");
  const radioBtn = document.querySelectorAll<HTMLElement>(".manual-btn");
  const scrollBtn = document.querySelectorAll<HTMLElement>(".scroll-down")[0];

  const sliderc =
    document.querySelectorAll<HTMLElement>(".slider_component")[0];
  const navBtn = document.getElementById("nav_show");
  navBtn.addEventListener("click", () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  });
  set_checked(0);
  console.log(typeof radioBtn);
  const images = document.querySelector(".slide img");
  const style = getComputedStyle(images);
  const width = style.width;
  scrollBtn.addEventListener("click", () => {
    window.scrollTo(0, 420);

    var op = 0.1; // initial opacity
    sliderc.style.display = "block";
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      sliderc.style.opacity = `${op}`;
      sliderc.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, 10);
  });

  radioBtn.forEach((value, i) => {
    console.log(typeof value);
    console.log(i);
    value.addEventListener("click", () => {
      const element = document.getElementById("first");

      set_checked(i);
      element.animate(
        {
          marginLeft: `-${parseInt(width) * i}px`,
        },
        {
          duration: 300,
          iterations: 1,
          fill: "both",
        }
      );
    });
  });
  var counter = 0;
  setInterval(() => {
    const element = document.getElementById("first");
    set_checked(counter);
    element.animate(
      {
        marginLeft: `-${parseInt(width) * counter}px`,
      },
      {
        duration: 300,
        iterations: 1,
        fill: "both",
      }
    );
    counter++;
    if (counter >= radioBtn.length) {
      counter = 0;
    }
  }, 3000);

  radioBtn.forEach((el) => {
    console.log(typeof el);
  });
  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    if (scroll < 420) {
      translate.forEach((element) => {
        let speed = parseFloat(element.dataset.speed);
        console.log(scroll);

        element.style.transform = `translateY(${scroll * speed}px)`;
      });
    }
  });
};
function set_checked(number: number) {
  const radioBtn = document.querySelectorAll<HTMLElement>(".manual-btn");
  radioBtn.forEach((el, i) => {
    if (i === number) {
      el.classList.add("slider_choosed");
    } else {
      el.classList.remove("slider_choosed");
    }
  });
}
function navbar_component() {
  const element = document.createElement("div");
  element.classList.add("navbar");
  element.innerHTML = nav;

  return element;
}

function parallax_component() {
  const element = document.createElement("div");
  element.classList.add("parallax");
  element.innerHTML = parallax;

  return element;
}
function myphoto_component() {
  const element = document.createElement("div");
  element.classList.add("myphoto");
  element.innerHTML = myphoto;
  return element;
}
function slider_component() {
  let element = document.createElement("div");
  element.classList.add("slider_component");
  element.innerHTML = slider;

  let slides = element.querySelectorAll<HTMLElement>(".slides")[0];
  let nav_auto = element.querySelectorAll<HTMLElement>(".navigation-auto")[0];
  let nav_manu = element.querySelectorAll<HTMLElement>(".navigation-manual")[0];
  json.forEach((slide, i) => {
    slides.innerHTML += `
      <input type="radio" name="radio-btn" class="radio-btn">
      <div class="slide">
          <img src="${slide.image}" alt="slide"> 
          <div class="stxt">
            ${slide.text}
          </div>
      </div>`;
    nav_auto.innerHTML += `<div class="auto-btn1"></div>`;
    nav_manu.innerHTML += `<label for="radio${i}" class="manual-btn"></label>`;
  });

  return element;
}
function scroll_component() {
  const element = document.createElement("div");
  element.classList.add("scroll_component");
  element.innerHTML += scroll;
  return element;
}
document.body.appendChild(navbar_component());
document.body.appendChild(parallax_component());
document.body.appendChild(slider_component());
document.body.appendChild(myphoto_component());
document.body.appendChild(scroll_component());
