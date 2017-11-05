// create the module and name it InetSolution
var inet = angular.module('inet', ['ngRoute', 'ngSanitize']);

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


inet.controller('coursesController', function ($scope, $route, $rootScope) {
    var id = $route.current.params.id;
    if (id) {
        if (id == 1) {
            $scope.title = "AppSense Inc";
            var desc = "<h4>AppSense Inc is a privately held company providing user virtualization technology.</h4>";
            desc += "<p><b> Module 1:</b></p><ul style='list-style: circle;'><li>Introducing the DesktopNow Suite</li>";
            desc += "<li>Identify and define the DesktopNow components and their roles</li>";
            desc += " <li>Perform and verify an Enterprise Installation.</li></ul>";
            $scope.descrip = desc;
            $scope.image = "cd1.jpg";
            $scope.price = "1000";
            $scope.lecture = "Bala";
        }
        else if (id == 2) {
            $scope.title = "XenApp and XenDesktop";
            var desc = "<h4>Deliver secure virtual apps and desktops. ... Deliver Windows, Linux, web and SaaS applications.</h4>";
            desc += "<p>Whether you’re new to a field and looking to change careers or have years of work experience and want to update your skills, there is no better choice than our institute.</p><p><b>We are unique because we feature:</b></p><ul style='list-style: circle;'><li>Hands-on instruction.</li>";
            desc += "<li>Individual state-of-the-art workstations for each student in every technical and desktop class.</li>";
            desc += " <li>Instructor-led classes by professionals with years of formal and on-the-job training, who are at the top of their field and are   experts in their area of instruction.</li>";
            desc += " <li>Homework and formal testing to ensure your knowledge and strengthen your credibility.</li>";
            desc += " <li>Competitive prices and payment options.</li></ul>";
            $scope.descrip = desc;
            $scope.image = "cd2.jpg";
            $scope.price = "1000";
            $scope.lecture = "Bala";
        }
        else if (id == 3) {
            $scope.title = "Amazon Web Services";
            var desc = "<h4>Amazon Web Services is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals.</h4>";
            desc += "<p>With the accelerating adoption of cloud computing and the AWS Cloud around the world, organisations are increasingly seeking ways to identify individuals with demonstrated knowledge of AWS best practices. AWS Certifications recognise IT professionals that possess the skills and technical knowledge necessary for designing, deploying, and managing applications on the AWS platform. Earning certification helps you gain visibility and credibility for your proven experience working with AWS,as well as contributes to your organisation's proficiency with AWS-based applications.</p>";
            desc += "<p>AWS certifications certify the technical skills and knowledge associated with best practices for building secure and reliable cloud-based applications using AWS technology.</p>";
            desc += "<p><b>Earning AWS Certification enables you to: are unique because we feature:</b></p><ul style='list-style: circle;'><li>Introducing the DesktopNow Suite.</li>";
            desc += "<li>	Demonstrate that you have skills, knowledge, and expertise to design, deploy, and manage projects applications on the    AWS platform.</li>";
            desc += " <li>Gain recognition and visibility for your proven skills and proficiency.</li>";
            desc += " <li>Foster credibility with your employer and peers.</li></ul>";
            $scope.descrip = desc;
            $scope.image = "cd3.jpg";
            $scope.price = "1000";
            $scope.lecture = "Bala";
        }
        else if (id == 4) {
            $scope.title = "VMware";
            var desc = "<h4>VMware, a global leader in cloud infrastructure & digital workspace technology, accelerates digital transformation for evolving IT environments.</h4>";
            desc += "<p>We offers world-class training programmes to ensure and validate the technical competencies and expertise needed to install, manage, deploy and support VMware software. You will also be able to illustrate your ability to operate and maintain VMware cloud environments, giving companies the confidence and peace of mind that their IT employees have the skills and experience needed to be successful in the cloud era.</p>";
            desc += "<p>VMware’s role-based framework matches VMware certifications to both the roles that companies need to effectively design, operate, and evolve their cloud environment, and to the key technology solution areas that support the evolution to the cloud.</p>";         
            $scope.descrip = desc;
            $scope.image = "cd4.jpg";
            $scope.price = "1000";
            $scope.lecture = "Bala";
        }
        else if (id == 5) {
            $scope.title = "Citrix XenApp";
            var desc = "<h4>Deliver secure virtual apps and desktops. ... Deliver Windows, Linux, web and SaaS applications or full virtual desktops from any cloud public, on premises or hybrid. With a Citrix Cloud management infrastructure</h4>";           
            $scope.descrip = desc;
            $scope.image = "cd2.jpg";
            $scope.price = "1000";
            $scope.lecture = "Bala";
        }
        else if (id == 6) {
            $scope.title = "NetScaler - Citrix";
            var desc = "<h4>Citrix NetScaler allows you to bridge the gap between your traditional and DevOps apps by providing unified capabilities and management through a single ...</h4>";
            $scope.descrip = desc;
            $scope.image = "cd6.jpg";
            $scope.price = "1000";
            $scope.lecture = "Bala";
        }
    }
   
      
   
});

inet.controller('contactController', function ($scope) {
    $scope.message = 'HI';
});