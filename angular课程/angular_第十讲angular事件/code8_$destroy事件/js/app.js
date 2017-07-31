/**
 * Created by qingyun on 16/9/30.
 */
angular.module('myApp',['ngRoute']).config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl : "home.html",
        controller : "homeController"
    });
    $routeProvider.when('/other',{
        templateUrl : "other.html",
        controller : "otherController"
    })
}]).controller('homeController',['$scope','$location','$interval',function ($scope,$location,$interval) {
    $scope.goToOtherView = function () {
        $location.path('/other');
    };
    //定时任务controller销毁也不会销毁
    var sid = $interval(function () {
        //doSome
        console.log('22');
    },2000);
    $scope.$on('$destroy',function () {
        console.log(sid);
        $interval.cancel(sid);
    })
}]).controller('otherController',['$scope',function ($scope) {
    $scope.goBack = function () {
        window.history.go(-1);
    }
}]);