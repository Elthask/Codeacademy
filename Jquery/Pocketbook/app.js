var main = function () {
    $('form').submit(function () {
        var firstName = $('#first').val();

        if (firstName === "") {

        }

        return false;
    })
}

$(document).ready(main);
