$(function() {
    //--------top gallery------
    $('.gallery_items').slick({
        // autoplay: true,
        autoplaySpeed: 2500,
        cssEase: 'linear',
        dots: true
    });
    //--------toolbar_mnu-----------//

    $(".toolbar_menu_icon").click(function () {
        $(this).toggleClass("on");
        $('.toolbar_block').slideToggle(500);
    });

    $(".toolbar_block_item_link").click(function () {
        $(".toolbar_menu_icon").removeClass("on");
        // $('.toolbar_block').slideToggle(500);
    });


    $(".toolbar_block_item_link").click(function () {
        $(this).removeClass("on");
        $('.toolbar_block').slideToggle(500);
    });

    // $(window).click(function() {
    //    $(".toolbar_block").removeClass("on");
    // });

    $(window).resize(function() {
        var wid = $(window).width();
        if (wid > 992) {
            $(".toolbar_menu_icon").removeClass('on');
        }
    });

    // -----post carousel-----//

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["",""],
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //-----------offset------
    $(document).ready(function(){
        $(".toolbar_block").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    //--------------------button UP--------------
    var $button = $.backToTop({
        backgroundColor: '#5D5D5D',
        bottom: 20,
        color: '#FFFFFF',
        divFloat: 'right',
        effect: 'zoom',
        enabled: true,
        height: 50,
        width: 50,
        icon: 'fas fa-chevron-up',
        left: 20,
        right: 20,
        theme: 'default',
        zIndex: 999,
        speed: 1500
    });

    //------------------main------------------
    $("#container").mixItUp({});

    //------------------popup------------------
    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: false,
            // closeOnContentClick: false
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

});
