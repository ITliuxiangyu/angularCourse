/**
 * Created by qingyun on 16/9/30.
 */
angular.module('myApp',['ngRoute','myApp.factory','myApp.home']).config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl : "home.html",
            controller:"homeController"
        });
    $routeProvider.otherwise('/');
}]);