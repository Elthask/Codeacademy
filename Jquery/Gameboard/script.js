var main = function () {
    $(".more-btn").click(function () {
        $(this).next(".more-menu").toggle();
    });
    $(".share").click(function () {
        $(this).next(".share-menu").toggle();
    });
    $(".notification").click(function () {
        $(this).toggleClass("active");
    });
};

$(document).ready(main);
