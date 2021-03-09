// запуск фильтрации изображений
const mixer = mixitup('.container-filter');


// плавный переход при нажатии на пункты меню/arrowDown
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    if (anchor.classList.contains('arrowDown')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}