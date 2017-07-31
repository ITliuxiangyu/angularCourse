/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'home.html',
        controller:'homeController'
    });
    $routeProvider.otherwise('/');

}])
.controller('homeController',['$scope',function ($scope) {
    $scope.name = 'hello 我是home页面';
}]);