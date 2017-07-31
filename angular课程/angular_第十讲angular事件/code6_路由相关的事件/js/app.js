/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/home',{
        templateUrl:'home.html',
        controller:'homeController'
    });
    $routeProvider.otherwise('/')

}])
.run(['$rootScope','$location',function ($rootScope,$location) {
    //在有意外跳转的时候 $routeChangeStart会走两次
    $rootScope.$on('$routeChangeStart',function (evt,next,current) {
        //参数:
        //事件对象
        //将要导航到的下一个URL
        //路由变化前的URL
        console.log(evt,next,current);
    });
    $rootScope.$on('$routeChangeSuccess',function (evt,current,previous) {
        //参数:
        //原始的angularjs的 evt对象
        //用户当前所处的路由
        //上一个路由,如果为第一个则为undefined
        console.log(evt,current,previous);
    });
    $rootScope.$on('$routeChangeError',function (current,previous,rejection) {
        //参数:
        //当前路由的信息
        //上个路由的信息
        //被拒绝的promise的错误信息
        console.log(current,previous,rejection);
    });
    $rootScope.$on('$routeUpdate',function (current,previous,rejection) {
        //参数:
        //当前路由的信息
        //上个路由的信息
        //被拒绝的promise的错误信息
        console.log(current,previous,rejection);
    })
}])
.controller('homeController',['$scope','$location',function ($scope,$location) {
    $scope.name = 'hello 我是home页面';
    $scope.goToNewView = function () {
        $location.url('/other')
    }
}]);
//搜索引擎索引
//<meta name="fragment" content="!"/>