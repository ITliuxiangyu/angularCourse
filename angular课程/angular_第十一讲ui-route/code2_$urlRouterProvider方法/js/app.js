/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'home.html',
            controller:'homeController'
        })
        .state('other',{
            url:'/other',
            templateUrl:'other.html'
        });
    //when()方法
    // when函数接收两个参数，想要匹配的入口路径和用于重定向的路径（或者是路径匹配时调用的函数)
    // 如果第二个参数是函数
    // $urlRouterProvider.when('','/home');//只对空有效
    // $urlRouterProvider.when('',function () {
    //     return "/other";
    // });
    //ngRoute中设置意外跳转可以直接使用$routeProvider,而ui-router中是使用$urlRouterProvider来设置的
    // $urlRouterProvider.otherwise('/home');
    // $urlRouterProvider.otherwise('/other');
    $urlRouterProvider.otherwise(function ($injector,$location) {
        console.log($injector);
        $location.path('/home');//这时不能用$state,用$location,并且这里必须第一个传$injector,第二个为$location只有这两个参数
    });
    
}]).controller('homeController',['$scope','$state','$location',function ($scope,$state,$location) {
    console.log('ddd');
    $scope.goToNewView = function () {
        $state.go('other');
        // $location.path('/other');
    }
}]);