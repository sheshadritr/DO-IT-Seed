'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProjectListController', ['$scope', function($scope) {
	  $scope.projects = [
	                     {
	                    	 "projectId": "1",
	                    	 "name": "angular js",
	                    	 "description": "assignment 3",
	                    	 "coordinators": [ "Chandan",
	                    	                   "Ralf",
	                    	                   "Anurag"
	                    	                  ]
	                     },
	                     {
	                    	 "projectId": "2",
	                    	 "name": "java script",
	                    	 "description": "assignment 2",
		                    	 "coordinators": [ "Vinod",
		                    	                   "Himanshu",
		                    	                   "Manish"
		                    	                  ]
	                     },
	                     {
	                    	 "projectId": "3",
	                    	 "name": "pixel perfect",
	                    	 "description": "assignment 1",
	                    	 "coordinators": [ "Sri",
	                    	                   "Nagarjun",
	                    	                   "Vinith"
	                    	                  ]
	                     }
	                     ]
  }])
  .controller('ProjectDetailsController', ['$scope', function($scope) {
    $scope.projectdetails = [
                             {
                            	 "projectId": "1",
                            	 "tasks": [
                            	           	{
                            	        	   "title": "Create basic scaffold",
                            	        	   "status": "pending",
                            	        	   "info": "Create a basic project structure for HU-Web"
                            	           	},
                            	           	{
                            	        	   "title": "Ensure responsive",
                            	        	   "status": "pending",
                            	        	   "info": "Create css to ensure responsiveness of site"
                            	           	}
                            	           ]
                             }
                             ]
  }]);
