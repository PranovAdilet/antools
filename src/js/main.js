document.querySelector('.btn_login').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form_login').classList.add('active')
}

document.querySelector('.popup_close').onclick = function () {
    document.querySelector('.overlay').classList.remove('overlay_active')
    document.querySelector('.popup__form_login').classList.remove('active')
    document.querySelector('.popup__form_signup').classList.remove('active')
}
document.querySelector('.btn_signup').onclick = function () {
    document.querySelector('.overlay').classList.add(('overlay_active'))
    document.querySelector('.popup__form_signup').classList.add('active')
}
document.querySelector('.tools__more').onclick = function () {
    document.querySelector('.tools__more').classList.toggle('active')
    if (document.querySelector('.tools__more').classList.contains('active')){
        document.querySelector('.tools__more').textContent = 'hide'
    } else{
        document.querySelector('.tools__more').textContent = 'Load more'
    }


    document.querySelectorAll('.tools__card_hide').forEach(function (card) {
        card.classList.toggle('active')
    })
}


let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
let map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.878982, 74.595075],
        zoom: 20
    });
    var myIcon = DG.icon({
        iconUrl: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/654/4/logo/medium_6cf8c2277f413c6b91530d6689b408be.png',
        className: 'map__circle',
        iconSize: [35, 35],

    });
    DG.marker([42.878882, 74.595475], {icon: myIcon, label:'Академия Программирования It-Run'}).addTo(map).bindPopup('Центр Программирования, IT-Run!');
});

