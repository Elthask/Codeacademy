var template = function (text) {
    return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function () {
    $('form').submit(function () {
        var text = $("#todo");
        if (text.val() !== "") {
            var html = template(text.val());
            $(html).appendTo(".list");
            $(text).val("");
        }
        return false;
    });

    $(document).on("click", ".glyphicon-star", function () {
        $(this).toggleClass("active");
    });
    $(document).on("click", ".glyphicon-remove", function () {
        $(this).parent().remove();
    });


    var add = function (item) {
        var html = template(item);
        $(html).appendTo('.list');
    };

    if (annyang) {
        var commands = {
            'add *item': add,
        };
        annyang.addCommands(commands);
        annyang.start();
    }
};

$(document).ready(main);
