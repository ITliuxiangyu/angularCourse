/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider.when('/',{
        templateUrl:'home.html',
        controller:'homeController'
    });
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');
    $routeProvider.otherwise('/')

}])
.run(['$rootScope','$location',function ($rootScope,$location) {
    $rootScope.$on('$routeChangeStart',function (evt,next,current) {
        //参数:
        //将要导航到的下一个URL
        //路由变化前的URL
        //下一个路由,如果为第一个则为undefined
        console.log(evt,next,current);
    });
    $rootScope.$on('$routeChangeSuccess',function (evt,next,previous) {
        //参数:
        //原始的angularjs的 evt对象
        //用户当前所处的路由
        //上一个路由,如果为第一个则为undefined
        console.log(evt,next,previous);
    });
    $rootScope.$on('$routeChangeError',function (current,previous,rejection) {
        //参数:
        //当前路由的信息
        //上个路由的信息
        //被拒绝的promise的错误信息
        // console.log(current,previous,rejection);
    });
    $rootScope.$on('$routeUpdate',function (current,previous,rejection) {
        //参数:
        //当前路由的信息
        //上个路由的信息
        //被拒绝的promise的错误信息
        // console.log(current,previous,rejection);
    })
}])
.controller('homeController',['$scope',function ($scope) {
    $scope.name = 'hello 我是home页面';
}]);
//搜索引擎索引
//<meta name="fragment" content="!"/>