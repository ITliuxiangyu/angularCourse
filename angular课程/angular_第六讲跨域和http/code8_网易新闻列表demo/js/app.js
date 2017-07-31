/**
 * Created by qingyun on 16/9/20.
 */
var app = angular.module('myApp1',[]);
angular.module('myApp',['ngRoute','myApp.myFactory','myApp.homeController','myApp.summaryController']).config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'home.html',
        controller:'homeController',
        resolve:{
            getNewsDataFromFactory:function (DataFactory) {
                 return DataFactory.getNewData();
            }
        }
    });
    $routeProvider.when('/summary/:postid',{
        templateUrl:'summary.html',
        controller:'summaryController'
    });

    $routeProvider.otherwise('/');
}]);