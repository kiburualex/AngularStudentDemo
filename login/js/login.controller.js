(function(){
	 'use strict';

	angular
	   .module('app')
	   .controller('LoginController', LoginController);


	LoginController.$inject = ['$scope', '$ngConfirm','$state'];

	function LoginController($scope, $ngConfirm, $state){

       var vm = this;
       vm.submitting = false;
       vm.credentials = {username: "", password: ""};

       vm.login = function(){
         vm.submitting = true;	
         if(vm.credentials.username === 'admin' && vm.credentials.password ==='admin'){
               $state.go('app.students');
               vm.submitting = false;
         }else{
               $ngConfirm({
                    title: 'Authentication',
                    content: 'Wrong Username / Password Combination! <br> Please fill in the right details',
                    buttons: {   
                        close: {
                            text: "ok!",
                            btnClass: 'btn-danger',
                            keys: ['enter'], // will trigger when enter is pressed
                            action: function($scope){
                                 console.log('the user redirected');
                                 vm.submitting = false;
                            }
                        }
                    }
               });
          }

       };    

	}



})();