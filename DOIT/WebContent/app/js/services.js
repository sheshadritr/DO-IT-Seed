'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var serv = angular.module('myApp.services', []).
  value('version', '0.1');

serv.service( 'jsonServices', function() {	
	 var projects = [{
   	 "projectId": 1,
	 "name": "angular js",
	 "description": "assignment 1",
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
   	        	   "priority": "showstopper",
   	        	   "info": "Create a basic project structure for HU-Web",
   	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
   	        	   "assignedTo": "Chandan"
   	           	},
   	           	{
   	        	   "title": "Ensure responsive",
   	        	   "status": "pending",
   	        	   "priority": "high",
   	        	   "info": "Create css to ensure responsiveness of site",
   	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
   	        	   "assignedTo": "Ralf"
   	           	}]
    },
    {
   	 "projectId": 2,
   	 "name": "java script",
	 "description": "assignment 2",
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
   	        	   "priority": "high",
   	        	   "info": "Create a basic project structure for HU-Web",
   	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
   	        	   "assignedTo": "Vinod"
   	           	},
   	           	{
   	        	   "title": "Ensure responsive for assign-2",
   	        	   "status": "pending",
   	        	   "priority": "low",
   	        	   "info": "Create css to ensure responsiveness of site",
   	        	   "deuDate": "27-06-2014", "createdOn": "26-06-2014", "closedOn": "27-06-2014",
   	        	   "assignedTo": "Manish"
   	           	}]
    },
    {
   	 "projectId": 3,
   	 "name": "pixel perfect",
   	 "description": "assignment 3",
     "collaborators": [{
			"name": "Sri", "role": "Developer"
		   },
		   {
			 "name": "Nagarjun", "role": "Developer"
		   },
		   {
			 "name": "Vinith", "role": "Developer"
	   }],
    }];
	
	
     this.list = function(){
    	    return projects; 
     };       
});