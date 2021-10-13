let icon = document.querySelector('#icon-menu');
let menu = document.querySelector('#menu');
let span = $('.icon span');

icon.addEventListener('click', function () {
    $(menu).fadeToggle('menu-active');
    $(span).toggleClass('span-active');
})

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top - 100 + "px"
    }, 1000);
});

// Funcion para barra de Menu
$(window).scroll(function () {
    let header = $(".navbar");
    if ($(".navbar").offset().top > 400) {
        $(header).css("background", "#fff");
        // $('.navbar img').fadeIn();
    } else {
        // $(".navbar").addClass("navbar-expand-lg");
        $(header).css("background", "transparent");
        // $('.navbar img').fadeOut()
    }
});