(function(){
	 'use strict';

	angular
	   .module('app')
	   .controller('StudentController', StudentController)
	   .controller('ModalInstanceController', ModalInstanceController)
	   .controller('UpdateModalInstanceController', UpdateModalInstanceController);

 /* Student Controller */
	StudentController.$inject = ['$scope', '$uibModal', '$log'];

	function StudentController($scope, $uibModal, $log){

		var vm = this;
        /* Student Data */
		vm.students = [
		 {
			username :"kim",
			email: "kim@gmail.com",
			phone: "0728888999",
			dob: "25-01-2017"
		 },
		 {
            username :"james",
			email: "james@gmail.com",
			phone: "071600800",
			dob: "25-04-1980"
		 }
		];
        /* Student Add Modal */
        vm.show = function(){
          var modalInstance= $uibModal.open({
			templateUrl:'students/modal.tpl.html',
			controller:'ModalInstanceController',
			controllerAs:'vm',
			resolve: {
                student: function(){
                	return vm.studentDetail;
                }
			}
		  });

		  modalInstance.result.then(
            function(student){
               vm.students.push(student);
            },
            function(){
              //$log.info('Modal dismissed at:' + new Date());
            }
		  );
			 
        };
        /* Student Remove */
        vm.removeStudent = function(student){
	       var removedStudent = vm.students.indexOf(student);
	       vm.students.splice(removedStudent, 1);
		};
        /* Student Update */
		vm.editStudent = function(student){
		   console.log(student);
		   vm.selectedStudent = student;

		    var modalInstance= $uibModal.open({
			templateUrl:'students/updatemodal.tpl.html',
			controller:'UpdateModalInstanceController',
			controllerAs:'vm',
			resolve: {
                selectedStudent: function(){
                	return vm.selectedStudent;
                }
			}
		  });

		  modalInstance.result.then(
            function(selectedStudent){
               alert('updated '+ selectedStudent.username)
            },
            function(){
              //Do Nothing
            }
		  );
		};
        

	}

    /* Add  Student Modal */
	ModalInstanceController.$inject = ['$scope', '$uibModalInstance'];

	function ModalInstanceController($scope, $uibModalInstance){

	   var vm = this;
		
       vm.addStudent = function(){
         $uibModalInstance.close(vm.studentDetail);
       };

       vm.cancel = function(){
         $uibModalInstance.dismiss('cancel');
       };

       vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	    vm.format = vm.formats[0];
	    vm.altInputFormats = ['M!/d!/yyyy'];

		vm.open1 = function() {
          $scope.popup1.opened = true;
        };
        /* date options */
        vm.dateOptions = {
		    dateDisabled: disabled,
		    formatYear: 'yy',
		    maxDate: new Date(2020, 5, 22),
		    minDate: new Date(),
		    startingDay: 1
	    };

	    function disabled(data) {
		    var date = data.date,
		      mode = data.mode;
		    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
	    }

        $scope.popup1 = {
		   opened: false
		};
       
	}
    
    /* Update Student Modal */
	UpdateModalInstanceController.$inject = ['$scope','$uibModalInstance', 'selectedStudent'];

	function UpdateModalInstanceController($scope, $uibModalInstance, selectedStudent){

       var vm = this;
       vm.updatestudentDetail = selectedStudent;
		
       vm.UpdateStudent = function(){
         $uibModalInstance.close(vm.updatestudentDetail);
       };

       vm.cancel = function(){
         $uibModalInstance.dismiss('cancel');
       };
	}

})();