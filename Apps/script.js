// create the module and name it InetSolution
var inet = angular.module('inet', ['ngRoute']);
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
            controller: 'homeController'
        })
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
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
        })
    .otherwise({
        redirectTo: '/home'
    });
});

// create the controller and inject Angular's $scope
inet.controller('mainController', function ($scope, $http, $rootScope, $location) {
    // create a message to display in our view 
    $scope.location = $location.path();
    $rootScope.$on('$routeChangeSuccess', function () {
        $scope.location = $location.path();
    });
    $scope.courses = $rootScope.courses;
    $scope.year = new Date().getFullYear();
});
inet.controller('homeController', function ($scope, $http, $rootScope, $location) {
    document.getElementById("mainjsload").innerHTML = "";
    var loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/main.js';
        document.getElementById("mainjsload").appendChild(script);
    };
    $scope.$on('$viewContentLoaded', function () {
        loadScript();
    });
});

inet.controller('coursesController', function ($scope, $route, $rootScope) {
    //var id = $route.current.params.id;
    //$scope.courses = $rootScope.courses;
    //if (id)
    //    $scope.course = $scope.courses[parseInt(id[1])];
    document.getElementById("mainjsload").innerHTML = "";
    var loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/main.js';
        document.getElementById("mainjsload").appendChild(script);
    };
    $scope.$on('$viewContentLoaded', function () {
        loadScript();
    });

});

inet.controller('contactController', function ($scope, $rootScope) {

});