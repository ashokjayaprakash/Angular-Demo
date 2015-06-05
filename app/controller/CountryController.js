app.controller('CountryController',function($scope,$http,$log){
    $log.info("Initializing CountryController");
    $http.get("http://www.w3schools.com/website/customers_mysql.php")
        .success(function(response){
            $log.warn(response);
            $scope.countries = response;
            $scope.name = response;
        }
    );

    $scope.toggle = function(){
        $scope.table = $scope.table === false ? true: false;
    };

});

