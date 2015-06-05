
var app = angular.module("myApp",['ngRoute']);

app.config(['$routeProvider','$compileProvider',function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'view/country.html',
            controller: 'CountryController'
        })
        .when('/notes',{
            templateUrl: 'view/notes.html',
            controller: 'NotesController'
        })
        .when('/time',{
            templateUrl: 'view/time.html',
            controller: 'TimeController'
        })
        .otherwise({
            templateUrl: 'view/error.html'
        });

}]);