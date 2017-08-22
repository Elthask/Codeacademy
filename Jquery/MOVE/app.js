var main = function () {
    var cities = ['lisbon', 'porto', , 'New York', 'Mumbai', 'Sao Paulo', 'Shanghai', 'Hong Kong', 'Paris'];
    cities.sort();

    $("#searchBox").autocomplete({
        source: cities
    });
}


$(document).ready(main);
