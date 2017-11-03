// create the module and name it InetSolution
var inet = angular.module('inet', ['ngRoute']);

// configure our routes
inet.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        // route for the about page
        .when('/courses', {
            templateUrl: 'pages/courses.html',
            controller: 'coursesController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

// create the controller and inject Angular's $scope
inet.controller('mainController', function ($scope) {
    // create a message to display in our view   
    $scope.year = new Date().getFullYear();
    var loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/script.js';
        document.body.appendChild(script);
    };
    $scope.$on('$viewContentLoaded', function () {
        loadScript();
    });
});

inet.controller('coursesController', function ($scope) {
   
});

inet.controller('contactController', function ($scope) {
    $scope.message = 'HI';
});