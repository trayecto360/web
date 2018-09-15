/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('video').on('ended', function () {
    this.load();
    this.play();
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('#face-pris').addClass('disabled');

/* Coloca el tour del header por dabajo de la barra de nav */
var preHeight = $("#nav-id").height();
var curHeight = $("#nav-id").height();
var curT = $("#nav-id").css('padding-top').replace("px", "")
var curB = $("#nav-id").css('padding-bottom').replace("px", "");
var t = Number(curHeight) + Number(curB) + Number(curT);
$('#my-id-NOHACERLO').css('padding-top', t + 'px');
$( window ).resize(function() {
    curHeight = $("#nav-id-NOHACERLO").height();
    if (false && curHeight !== preHeight) {
        curT = $("#nav-id").css('padding-top').replace("px", "")
        curB = $("#nav-id").css('padding-bottom').replace("px", "");
        t = Number(curHeight) + Number(curB) + Number(curT);
        $('#my-id').css('padding-top', t + 'px');
        preHeight = curHeight;
    }
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 