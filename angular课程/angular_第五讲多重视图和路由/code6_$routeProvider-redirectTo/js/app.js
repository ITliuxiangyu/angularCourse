/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider.when('/home',{
        templateUrl:'home.html',
        controller:'homeController'
    });
    $routeProvider.when('/other',{
        templateUrl:'other.html',
        controller:'userController'//controller是可以共用的
    });
    $routeProvider.when('/user/:name',{//这里是路由间传值的写法
        templateUrl:'user.html',
        controller:'userController',
        //这里可以使用redirectTo来进行一些操作,当其是字符串时和$routeProvider.otherwise('/home');效果一致,但是redirectTo后可以跟函数,这样我们就可以进行复杂的操作后返回最后确定的路由路径
        redirectTo:function (a,b,c) {
            //这里有三个参数第一个代表从当前路径取出的路由参数
            //第二个参数代表当前路径
            //第三个参数代表当前URL中的查询串 在网址后面写?age=2
            console.log(a,b,c);
            return '/other'
        }
    });
    $routeProvider.otherwise('/home');

}])
.controller('homeController',['$scope','$location',function ($scope,$location) {
    console.log('查询串改变了');
    $scope.name = 'hello 我是home页面';
    $scope.goToUserView = function () {
        $location.path('/user/张三');
        // $location.replace();
        // $location.search('name=2');
        // $location.path('/other?name=2');
        // console.log($location.url('/other?name=2'));

    }
}])
.controller('userController',['$scope','$location',function ($scope,$location) {
    $scope.goBack = function () {
        $location.path('/home');
        // window.history.go(-1);
    };
}]);