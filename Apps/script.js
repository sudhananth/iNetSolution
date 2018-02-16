// create the module and name it InetSolution
var inet = angular.module('inet', ['ngRoute']);
inet.run(function ($rootScope, $http) {
    $rootScope.datas = new Array;
    $http({ method: 'GET', url: 'data.json' }).then(function (data) {
        $rootScope.datas = data.data;
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
            templateUrl: 'pages/course.html',
            controller: 'coursesController'
        })
         .when('/courses/:id', {
             templateUrl: 'pages/courses.html',
             controller: 'coursesController'
         })
         .when('/courses/:id/:subid', {
             templateUrl: 'pages/courses-details.html',
             controller: 'coursesdetailsController'
         })
        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
          .when('/about', {
              templateUrl: 'pages/aboutus.html',
              controller: 'aboutController'
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
    $scope.courses = $rootScope.datas;
    $scope.$on('$viewContentLoaded', function () { loadScript(); });
});

inet.controller('coursesController', function ($scope, $route, $rootScope) {
    var id = $route.current.params.id;
    $scope.courses = $rootScope.datas;
    $scope.$on('$viewContentLoaded', function () { loadScript(); });
});
inet.controller('coursesdetailsController', function ($scope, $route, $rootScope) {
    var id = $route.current.params.id;    
    var subid = $route.current.params.subid;
    $scope.pcourseid = id;
    var feature = $rootScope.datas.features;
    var lecturers = $rootScope.datas.lecturers;
    $scope.courses = $rootScope.datas.courses;
    var odata = $scope.courses.filter(f=>f.id == id);
    if (odata.length > 0) {
        var adata = odata[0].subcourses.filter(f=>f.id == subid);
        if (adata.length > 0) {
            var cdata = adata[0];
            var fedata = feature.filter(f=>f.id == cdata.featureid)[0];
            var ledata = cdata.lecturersid;

            var lecdata = [];
            angular.forEach(ledata, function (value1, key1) {
                var fldata = lecturers.filter(f=>f.id == value1)[0];
                if (fldata)
                    lecdata.push(fldata);
            });
            $scope.data = {
                mdata: adata[0],
                fdata: fedata ? fedata : [],
                ldata: lecdata ? lecdata : [],
                rdata: odata[0].subcourses ? odata[0].subcourses : []
            };
        }
    }
});
inet.controller('contactController', function ($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function () { loadScript(); });
});
inet.controller('aboutController', function ($scope, $rootScope) {

});
var loadScript = function () {
    document.getElementById("mainjsload").innerHTML = "";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/main.js';
    document.getElementById("mainjsload").appendChild(script);
};
inet.directive('course', function () {
    var controller = ['$scope', function ($scope) {
        function init() {
            $scope.items = angular.copy($scope.datasource);
        }
        init();
    }],
      template = 'pages/courses.html';
    return {
        restrict: 'EA', //Default in 1.3+
        scope: {
            datasource: '='
        },
        controller: controller,
        templateUrl: template
    };
});
inet.directive('accordin', function () {
    var controller = ['$scope', function ($scope) {
        $scope.togglevalue = 0;
        $scope.toggledvalue = 0;
        function init() {
            $scope.info = angular.copy($scope.datasource);
        }
        init();
        $scope.toggle = function (val, checked) {
            if ($scope.toggledvalue != val) {
                $scope.togglevalue = val;
                $scope.toggledvalue = val;
                $(".checked").removeClass('checked');
                $(checked.currentTarget).addClass("checked");
            }
            else {
                $scope.togglevalue = 0;
                $scope.toggledvalue = 0;
                $(checked.currentTarget).removeClass("checked");
            }
        };
    }],
      template = 'pages/accordin.html';
    return {
        restrict: 'EA', //Default in 1.3+
        scope: {
            datasource: '='
        },
        controller: controller,
        templateUrl: template
    };
});
