$(document).ready(function() {
    
    $(".skills-background-image .button").click(function () {
       $(".skillbar-container .skillbar").each(function () {
           $(this).find(".skillbar-bar-background").animate({ 
                width: 60
            }, 1500);
        });
    });
    
    $('.open-popup').click(function () {
        $('header').css('filter', 'blur(5px)');
        $('.overlar').css("display", "block")
        $('.overlay').fadeIn();    
    });
    
    $(".close-popup").click(function () {
       $('header').css('filter', '');
        $('.overlay').fadeOut();            
    });
    
    $(document).mouseup(function (event) {
        if (event.target.className === "overlay") { 
            $('header').css('filter', '');
            $('.overlay').fadeOut(); 
        }    
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".navbar").css(
            {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                boxShadow: "5px 5px 5px #ddd",
                "z-index": 3 
            });
            
            $(".navbar-nav").css({
                "flex-grow": 1  
            });
            
            $(".navbar .nav-item").css({
                display: "flex",
                'flex-grow': 1,
                'justify-content': "space-around"
            });
            
           $(".open-popup").css(
            {
                display: 'none'
            });
        }
        
    });
     
    $(window).scroll(function () {
        if ($(this).scrollTop() === 0) {
            $(".navbar").css(
            {
                position: "static",
                display: "flex",
                "justify-content": "space-between",
                boxShadow: "none"
            });
            
             $(".navbar-nav").css({
                 "flex-grow": 0
            });
            
            $(".open-popup").css({
                display: "flex"
            });
        }
    });
    
    
    
    $(".scroll-top-button").click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
            
    });
});