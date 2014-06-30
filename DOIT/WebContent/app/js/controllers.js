'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProjectListController', ['$scope', 'jsonServices', function($scope, jsonServices) {
	  $scope.projects = jsonServices.list();
  }])
  
  .controller('ProjectDetailsController', ['$scope', '$routeParams', 'jsonServices',
                                           function($scope, $routeParams, jsonServices) {
    $scope.projectDetails = jsonServices.list();
    
    for(var i=0; i < $scope.projectDetails.length; i++) {
    	if($routeParams.projectId == $scope.projectDetails[i].projectId) {
    		$scope.projectInfo = $scope.projectDetails[i];
    	}
    }
  }])
  .controller('ModalDemoCtrl', ['$scope', '$modal', 'jsonServices',
                               function ($scope, $modal, jsonServices) {
	  $scope.project = jsonServices.list();
	  $scope.open = function (size) {
	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        project: function () {
	          return $scope.project;
	        }
	      }
	    });
	    modalInstance.result.then(function (selectedItem) {
	      $scope.project.push(selectedItem);
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
}])
 .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'jsonServices',
                                          function($scope, $modalInstance, jsonServices) {
	$scope.ok = function() {
		var newProject ={
				 name: this.name,
				 description: this.description,
				 collaborators: {
					 name: this.coordinator,
					 role: 'Developer'
				 }
		};
		 
		jsonServices.save(newProject);
		$modalInstance.close();
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}])
 .controller('SelectCollaboratorCtrl', [ '$scope', 'jsonServices',
                                         function($scope, jsonServices) {
	 $scope.projects = jsonServices.list();
    for (var i = 0; i < $scope.projects.length; i++) {
		for (var j = 0; j < $scope.projects.collaborators.length; j++) {
            $scope.selectCollaborators[i+j] = $scope.projects[i].collaborators[j];
    		console.log($scope.selectCollaborators[i+j]);
		}
    }
}]);

