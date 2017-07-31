/**
 * Created by qingyun on 16/9/20.
 */
angular.module('myApp',['ngRoute','ngAnimate','myApp.myFactory','myApp.homeController','myApp.summaryController']).config(['$routeProvider',function ($routeProvider) {
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
}]).animation('.slide-in-left', function () {
    var myClass = {
        position: "relative",
        left: 0 + 'px'
    };
    return {
        enter: function(element, done) {
            element.css(myClass).animate({
                top: 0,
                left: 0
            }, 450, function () {
                myClass = {
                    position: "relative",
                    left: document.body.clientWidth + 'px'
                }
            });
        }
    };
});