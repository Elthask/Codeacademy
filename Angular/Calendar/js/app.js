var app = angular.module('CalendarApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "DayController",
            templateUrl: "views/day.html"
        })
        .when('/:id', {
            controller: 'EventController',
            templateUrl: 'views/event.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
