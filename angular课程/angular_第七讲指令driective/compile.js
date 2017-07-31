
angular.module('app', [])
.controller('myController', ['$scope', function($scope){
	$scope.name = '1';
}])
.directive('hello', ['$document', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: "<input ng-model='name'>",
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		compile: function(tElement, tAttrs, transclude){
			console.log('开始');
		 return function linking(scope, elm, attrs){
		 	console.log('结束，$scope注入成功！');
		 }},
		link: function($scope, iElm, iAttrs, controller) {
				console.log($scope.name);
		}
	};
}])
