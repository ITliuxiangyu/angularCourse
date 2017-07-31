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
}]).run(['$rootScope',function ($rootScope) {
    //$locationChangeStart事件是$broadcast事件,属于向下传播事件,所以我们放在$rootScope里进行监听
    $rootScope.$on('$locationChangeStart',function (evt,msg) {
        console.log(msg);
    });
}]).controller('homeController',['$scope','$location',function ($scope,$location) {
    $scope.goToOtherView = function () {
        $location.path('/other');
    };

}]).controller('otherController',['$scope',function ($scope) {
    $scope.goBack = function () {
        window.history.go(-1);
    }
}]);