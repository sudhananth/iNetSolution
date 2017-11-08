// create the module and name it InetSolution
var inet = angular.module('inet', ['ngRoute', 'ngSanitize']);
inet.run(function ($rootScope, $http) {
    $rootScope.courses = new Array;
    $http({ method: 'GET', url: 'data.json' }).then(function (data) {
        $rootScope.courses = data.data.courses;
    }, function (error) {
        alert('Error');
    });
});
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
         .when('/courseDetail/:id', {
             templateUrl: 'pages/courseDetails.html',
             controller: 'coursesController'
         })
        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

// create the controller and inject Angular's $scope
inet.controller('mainController', function ($scope, $http, $rootScope, $location) {
    // create a message to display in our view  
    $scope.dd = new Array;
    $scope.courses = $rootScope.courses;
    $scope.navigate = function (path) {
        if (path.split('!').length > 0)
            $location.path(path.split('!')[1]);
    }

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


inet.controller('coursesController', function ($scope, $route, $rootScope) {
    var id = $route.current.params.id;
    $scope.courses = $rootScope.courses;
    $scope.course = $scope.courses[id - 1];
});

inet.controller('contactController', function ($scope, $rootScope) {
});