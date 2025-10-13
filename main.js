const logo = document.querySelector('.logo'); 
window.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
        logo.classList.add('scrolled');
    } else {
        logo.classList.remove('scrolled');
    }
});


// получаем все элементы на странице
const allElements = document.querySelectorAll('body *');

// добавляем атрибут data-fade
allElements.forEach(el => {
  el.setAttribute('data-fade', '');
});

// настройки IntersectionObserver
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // больше не отслеживаем
    }
  });
}, observerOptions);

// начинаем наблюдать все элементы
allElements.forEach(el => observer.observe(el));
