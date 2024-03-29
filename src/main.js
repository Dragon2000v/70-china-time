const backdrop = document.querySelector(".backdrop");
const burgerMenuBtn = document.querySelector(".burger-menu");
const burgerMenuBtnClose = document.querySelector(".mobile-menu-btn");

// Додаємо обробник події для відкриття/закриття модального вікна
burgerMenuBtn.addEventListener('click', () => {
    backdrop.classList.toggle('is-open');
});

// Додаємо обробник події для закриття модального вікна при кліці на кнопці закриття
burgerMenuBtnClose.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
});

// Додаємо обробник подій для закриття модального вікна при кліці поза ним
backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
        backdrop.classList.remove('is-open');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var desktopNavLinks = document.querySelectorAll('.nav-link');
    var mobileNavLinks = document.querySelectorAll('.menu-list .menu-link'); // Використовуємо клас .menu-list для мобільного меню
  
    desktopNavLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        desktopNavLinks.forEach(function (link) {
          link.classList.remove('current');
        });
  
        link.classList.add('current');
      });
    });
});
  

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function() {

    menuItems.forEach(item => {
      item.querySelector('.menu-link').classList.remove('accent');
    });
    
    this.querySelector('.menu-link').classList.add('accent');
  });
});






  
