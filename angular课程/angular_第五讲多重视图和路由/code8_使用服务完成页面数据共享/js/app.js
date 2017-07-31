/**
 * Created by qingyun on 16/9/30.
 */
angular.module('myApp',['ngRoute','home','other']).config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl : "home.html",
        controller : "homeController"
    })
    .when('/other',{
        templateUrl : "other.html",
        controller : "otherController"
    });

    $routeProvider.otherwise('/');
}]).value('nameArray',{array:['张三','李四','王二','麻子','大傻']});