// $(function() {

//     let header = $("#header");
//     let bg = $("#bg")
//     let bgH = bg.innerHeight();
//     let ScrollPos = $(window).scrollTop();

//     $(window).on("scroll load resize", function() {
//         bgH = bg.innerHeight();
//         ScrollPos = $(this).scrollTop();

//         if ( ScrollPos > bgH) {
//             header.addClass('fixed');
//         } else {
//             header.removeClass('fixed')
//         }
//     });
// });

$(document).ready(function() {
        $('.header_burger').click(function(event) {
        $('.header_burger,.nav-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// const nav = document.querySelector('#nav')
// const navBtn = document.querySelector('#nav-btn')
// const navBtnImg = document.querySelector('#nav-btn-img')

// navBtn.onclick = () => {
//     if (nav.classList.toggle('open')) {
//         navBtnImg.src = "./img/close.svg";
//     } else {
//         navBtnImg.src = "./img/open.png";
//     }
// }