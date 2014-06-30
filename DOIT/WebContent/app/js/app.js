'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ui.bootstrap',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
  when('/view1', {
	  templateUrl: '/partials/view1.html',
	  controller: 'ProjectListController'}).
  when('/view1/:projectId', {
	  templateUrl: '/partials/view2.html',
	  controller: 'ProjectDetailsController'}).
  otherwise({
      redirectTo: '/view1'
    });
}]);


var ModalDemoCtrl = function ($scope, $modal, $log) {
	  $scope.items = ['item1', 'item2', 'item3'];
	  $scope.open = function (size) {
	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
	};


angular.module('myApp').constant('appSettings', {
  AppURI: 'http://127.0.0.1:9080/'
});

