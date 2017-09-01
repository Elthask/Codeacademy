app.controller('ChapterController', ['$scope', '$routeParams', 'books', function ($scope, $routeParams, books) {
    books.success(function (data) {
        $scope.book = data[$routeParams.bookId];
        $scope.chapter = $scope.book.chapters[$routeParams.chapterId];

        if ($routeParams.chapterId >= $scope.book.chapters.length - 1) {
            $scope.nextChapterIndex = "#";
        }
    });


    $scope.currentBookIndex = parseInt($routeParams.bookId);
    // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
    $scope.currentChapterIndex = parseInt($routeParams.chapterId);
    $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);
