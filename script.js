const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5
});

const revealElements = document.querySelectorAll('.reveal');

revealElements.forEach(element => {
  observer.observe(element);
});

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var offset = section.offsetTop;

    window.scrollTo({
      top: offset
    });
  }
}

document.getElementById('shopNowBtn').addEventListener('click', function (event) {
  scrollToSection('products');

  var navLinks = document.querySelectorAll('#navbar li a');
  navLinks.forEach(function (link) {
    link.classList.remove('active');
  });

  var productsLink = document.querySelector('#navbar li:nth-child(2) a');
  productsLink.classList.add('active');
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  var productsLink = document.querySelector('#navbar li:nth-child(2) a'); 
  var productsSection = document.getElementById('products');
  var smBannerSection = document.getElementById('sm-banner');

  productsLink.addEventListener('click', function () {
   
    var navLinks = document.querySelectorAll('#navbar li a');
    navLinks.forEach(function (link) {
      link.classList.remove('active');
    });

  
    this.classList.add('active');
    productsSection.scrollIntoView({
      behavior: 'smooth'
    });
  });

  const smBannerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        productsLink.classList.remove('active');
      }
    });
  });

  smBannerObserver.observe(smBannerSection);
});

