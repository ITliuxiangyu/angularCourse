/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/home',{
        // template:'<div>hello 我的字符模板!</div>',
        templateUrl:'home.html',//当前路由模板路径
        controller:'homeController',//为当前路由指定控制器
        // controller:function ($scope) {
        //     $scope.name = 'hello 我的controller是配置的时候的函数';
        // },
        // redirectTo:function (a,b,c) {
        //     console.log(a,b,c);
        //     return '/user';
        // }
        reloadOnSearch:true
    });
    $routeProvider.when('/user',{
        templateUrl:'user.html',
        controller:'userController'

    });
    $routeProvider.otherwise('/home');

}])
.controller('homeController',['$scope','$location',function ($scope,$location) {
    $scope.name = 'hello 我是home页面';
    $scope.goToUserView = function () {
        $location.path('/user');
    }
}])
.controller('userController',['$scope','$location',function ($scope,$location) {
    $scope.goBack = function () {
        $location.path('/home');
    };
}]);
//搜索引擎索引
//<meta name="fragment" content="!"/>