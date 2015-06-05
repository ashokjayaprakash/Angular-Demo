app.controller('NotesController',function($scope,$log){
    $log.info("Initializing NotesController");
    $scope.wordLeft = function() {
        if ($scope.note != null){ return 1000-$scope.note.length;}
        else { return 1000;}
    };
    $scope.resetNote = function(){ $scope.note = ""; }
});