/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider//ui-router的状态服务和ngRoute的$routeProvider是不同的
        .state('home',{//注ngRoute里我们只要设置了/哪怕不设置意外跳转也会自动跳转,而这里是不行的,这个属性在ui-router里代表的是状态不是路由
            url:'/home',//这里是以前的路由
            templateUrl:'home.html',
            controller:'homeController'
        })
        .state('other',{
            url:'/other1',
            templateUrl:'other.html'
        });
    $urlRouterProvider.otherwise('home');
    // $urlRouterProvider.otherwise('/home');
    // $urlRouterProvider.otherwise('/other');
}]).controller('homeController',['$scope','$state','$location',function ($scope,$state,$location) {
    console.log('ddd');
    $scope.goToNewView = function () {
        $state.go('other');
        // $location.path('/other');
    }
}]);
