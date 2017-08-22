$(document).ready(function () {
    $(".cart h3").click(function () {
        $(".cart .dropdown-menu").toggle();
        $(".account .dropdown-menu").hide();
        $(".help .dropdown-menu").hide();
    });
    $(".account h3").click(function () {
        $(".account .dropdown-menu").toggle();
        $(".cart .dropdown-menu").hide();
        $(".help .dropdown-menu").hide();
    });
    $(".help h3").click(function () {
        $(".help .dropdown-menu").toggle();
        $(".cart .dropdown-menu").hide();
        $(".account .dropdown-menu").hide();
    });


});
