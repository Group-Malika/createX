$(document).ready(function() {
    // Toggle menu and burger icon
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Close menu when clicking on a menu item
    $('.header_link').click(function(event){
        $('.header_burger, .header_menu').removeClass('active');
        $('body').removeClass('lock');
    });

    // Close menu when clicking anywhere outside the menu
    $(document).click(function(event) {
        if (!$(event.target).closest('.header').length) {
            $('.header_burger, .header_menu').removeClass('active');
            $('body').removeClass('lock');
        }
    });

    // Prevent closing menu when clicking inside the menu
    $('.header_menu').click(function(event){
        event.stopPropagation();
    });
});







