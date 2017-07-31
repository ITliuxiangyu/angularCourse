/**
 * Created by qingyun on 16/10/2.
 */
var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("tab", {
            url: "/tab",
            abstract:true,//可写可不写 写了就不能导航到tab
            templateUrl: "tabs.html"
        })
        .state("tab.news", {
            url:"/news",
            // templateUrl: "news.html",
            views: {
                'news': {
                    templateUrl: 'news.html',
                    controller:'newsController'
                }
            }
        })
        .state("tab.newsDetail", {
            url:"/newsDetail",
            views: {
                'news': {
                    templateUrl: 'newsDetail .html'
                }
            }
        })
        .state("tab.live", {
            url:"/live",
            views: {
                'live': {
                    templateUrl: 'live.html'
                }
            }
        })
        .state("tab.talk", {
            url:"/talk",
            views: {
                'talk': {
                    templateUrl: 'talk.html'
                }
            }
        })
        .state("tab.my", {
            url:"/my",
            views: {
                'my': {
                    templateUrl: 'my.html'
                }
            }
        });
    $urlRouterProvider.when("", "/tab/news");
}).controller('newsController',['$scope',function ($scope) {
    console.log('22');
}]);