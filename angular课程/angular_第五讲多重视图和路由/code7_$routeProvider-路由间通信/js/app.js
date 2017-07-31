/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider.when('/home',{
        templateUrl:'home.html',
        controller:'homeController',
    });
    $routeProvider.when('/other',{
        templateUrl:'other.html',
        controller:'userController'//controller是可以共用的
    });
    $routeProvider.when('/user/name',{//这里是路由间传值的写法
        /*
        * 路由间通信需要在路由路径后用/: + 参数 的形式来传值可以有很多
        * 然后在控制器里使用$routeParams.+参数的形式来取值
        * */
        templateUrl:'user.html',
        controller:'userController'
    });
    // $locationProvider.hashPrefix('!');//可以设置前缀符号,这是为了兼容一些浏览器
    $routeProvider.otherwise('/home');

}])
.controller('homeController',['$scope','$location',function ($scope,$location) {
    $scope.name = 'hello 我是home页面';
    $scope.goToUserView = function () {
        $location.path('/user/张三');
    }
}])
.controller('userController',['$scope','$location','$routeParams',function ($scope,$location,$routeParams) {
    //使用$routeParams.+参数的形式来取值
    console.log($routeParams.name);
    $scope.goBack = function () {
        $location.path('home');
    };
}]);