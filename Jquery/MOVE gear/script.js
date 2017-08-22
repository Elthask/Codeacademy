$(document).ready(function () {
    $(".login p").click(function () {
        $(".dropdown-menu").toggle();
    });
    $("form").submit(function () {
        var email = $("#email").val();
        var password = $("#password").val();

        if (email === "") {
            $(".email-error").html("Enter your email.");
        }
        if (password === "") {
            $(".password-error").html("Enter your password.");
        }
        return false;
    });

    $("#accordion").accordion();
});
