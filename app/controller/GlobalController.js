app.controller('GlobalController',function($scope, $location)
{
    console.log("HC");
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});