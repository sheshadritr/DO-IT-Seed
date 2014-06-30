'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProjectListController', ['$scope', function($scope) {
	  $scope.projects = [{
	                    	 "projectId": 1,
	                    	 "name": "angular js",
	                    	 "description": "assignment 1",
	                    	 "collaborators": [ "Chandan", "Ralf", "Anurag" ]
	                      },
	                      {
	                    	 "projectId": 2,
	                    	 "name": "java script",
	                    	 "description": "assignment 2",
		                     "collaborators": [ "Vinod", "Himanshu", "Manish" ]
	                      },
	                      {
	                    	 "projectId": 3,
	                    	 "name": "pixel perfect",
	                    	 "description": "assignment 3",
	                    	 "collaborators": [ "Sri", "Nagarjun", "Vinith" ]
	                     }];
  }])
  .controller('ProjectDetailsController', ['$scope', '$routeParams',
                                           function($scope, $routeParams) {
    $scope.projectDetails = [{
                            	 "projectId": 1,
                              	"collaborators": [{
                              						"name": "Ralf", "role": "Developer"
                              					   },
                              					   {
                              						 "name": "Chandan", "role": "Developer"
                              					   },
                              					   {
                              						  "name": "Anurag", "role": "Developer"
                              					   }],
                            	 "tasks": [{
                            	        	   "title": "Create basic scaffold",
                            	        	   "status": "pending",
                            	        	   "info": "Create a basic project structure for HU-Web",
                            	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
                            	        	   "assignedTo": "Chandan"
                            	           	},
                            	           	{
                            	        	   "title": "Ensure responsive",
                            	        	   "status": "pending",
                            	        	   "info": "Create css to ensure responsiveness of site",
                            	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
                            	        	   "assignedTo": "Ralf"
                            	           	}]
                             },
                             {
                            	 "projectId": 2,
                              	"collaborators": [{
                              						"name": "Vinod", "role": "Developer"
                              					   },
                              					   {
                              						 "name": "Himanshu", "role": "Developer"
                              					   },
                              					   {
                                						 "name": "Manish", "role": "Developer"
                                				   }],
                            	 "tasks": [{
                            	        	   "title": "Create basic scaffold for assign-2",
                            	        	   "status": "pending",
                            	        	   "info": "Create a basic project structure for HU-Web",
                            	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
                            	        	   "assignedTo": "Chandan"
                            	           	},
                            	           	{
                            	        	   "title": "Ensure responsive for assign-2",
                            	        	   "status": "pending",
                            	        	   "info": "Create css to ensure responsiveness of site",
                            	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
                            	        	   "assignedTo": "Ralf"
                            	           	}]
                             }];
    
    for(var i=0; i < $scope.projectDetails.length; i++) {
    	if($routeParams.projectId == $scope.projectDetails[i].projectId) {
    		$scope.projectInfo = $scope.projectDetails[i];
    		console.log($scope.projectInfo);
    	}
    }
    
  }]);


var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
	  $scope.items = items;
	  $scope.selected = {
	    item: $scope.items[0]
	  };
	  $scope.ok = function () {
	    $modalInstance.close($scope.selected.item);
	  };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};
};

