(function(){
	'use strict';

	angular
	    .module('app', [
	       'ui.router',
	       'ngAnimate',
	       'ui.bootstrap',
         'ngSanitize',
         'cp.ngConfirm',
         'angular-ladda',
         'jcs-autoValidate'
         ])
	    .config(configure)
      .controller('HomeController', HomeController);

	configure.$inject = ['$stateProvider','$urlRouterProvider'];

	function configure($stateProvider, $urlRouterProvider){

          $stateProvider
            .state('app', {
            	url: "/app",
            	templateUrl: "header/header.html",
              controller: 'HomeController',
              controllerAs: 'vm'
            })
            .state('app.students', {
              url: "/students",
              templateUrl: "students/students.html",
              controller:"StudentController",
              controllerAs:"vm"
            })
            .state('app.courses', {
            	url:"/courses",
            	templateUrl: "courses/courses.html"
            })
            .state('app.logout', {
            	url: "/logout",
            	templateUrl: "login/logout.html"
            })
            .state('login', {
              url:"/login",
              templateUrl: "login/login.html",
          	  controller:"LoginController",
          	  controllerAs: "vm"
            });

            $urlRouterProvider.otherwise("/login");

	}

  HomeController.$inject = ['$scope', '$state'];

  function HomeController($scope, $state){
         var vm = this;

        vm.logout = function(){
           $state.go('login');
        }
  }

})();