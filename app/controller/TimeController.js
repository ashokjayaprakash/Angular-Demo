app.controller('TimeController',function($scope, $timeout,$log) {
    $log.info("Initializing TimeController");
    $scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000; //ms

    var tick = function () {
        $scope.clock = new Date(); // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    };
    $timeout(tick, $scope.tickInterval);
});
