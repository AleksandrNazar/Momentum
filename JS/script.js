"use strct"
//Мобильное меню
const mobileNavToggleButton = document.querySelector('.navbar-nav-mobile-button');
const mobileMenu = document.querySelector('.navbar-nav-mobile-list');

mobileNavToggleButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

//---Закрытие меню после клика по пункту меню
const navLinks = mobileMenu.querySelectorAll('.navbar-nav-mobile-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

//Прокрутка
const scrollButton = document.querySelector('#scroll-button');

scrollButton.addEventListener('click', function() {
    window.scrollTo({
        top: 700,
        behavior: 'smooth',
    });
})

//Слайдер

const slider = document.querySelector('.slider-wrapper');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index) {
    
    //Скрываем все слайды кроме первого
    if (index !== 0) {
        slide.classList.add('hidden-slide');
    }

    //Добавляем индексы
    slide.dataset.index = index;
    //добавляем data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');
    //Клик по слайдам
    slide.addEventListener('click', function() {
        showNextSlide('next');
    })
})

//Управление слайдером с помощью кнопок
btnNext.addEventListener('click', function() {
    showNextSlide('next');
})

btnPrev.addEventListener('click', function() {
    showNextSlide('prev');
})

//
function showNextSlide(direction) {
    //Скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden-slide');
    currentSlide.removeAttribute('data-active');

    //Рассчитываем следующий индекс в зависимости от направления
    let nextSlideIndex;
    if(direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if(direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden-slide');
    nextSlide.setAttribute('data-active', '');
}

//Вылидация формы

const formEmail = document.querySelector('.form-js');
const inputEmail = document.querySelector('.input-js-email');

formEmail.addEventListener('submit', function (event) {

    if(emailTest(inputEmail)) {
        inputEmail.classList.add('error')
        event.preventDefault();
    } else {
        inputEmail.classList.remove('error');
    }
});

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

// Влидация вариант 2
/*
formEmail.addEventListener('submit', function (event) {

    if (emailTest(inputEmail)) {
        
        inputEmail.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form-email-error">
                Введите email
            </div>`
        );
        
        event.preventDefault();
    }
});

//--убираем сообщение об ощибке
inputEmail.addEventListener('focus', function (event) {
    
    if (inputEmail.nextElementSibling) {
        inputEmail.nextElementSibling.remove();
    }
    
});


//--функция теста email
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
*/