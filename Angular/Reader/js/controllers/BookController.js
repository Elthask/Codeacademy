app.controller('BookController', ['$scope', '$routeParams', 'books', function ($scope, $routeParams, books) {
    books.success(function (data) {
        $scope.book = data[$routeParams.bookId];
    });
    $scope.currentBookIndex = parseInt($routeParams.bookId);

}]);
