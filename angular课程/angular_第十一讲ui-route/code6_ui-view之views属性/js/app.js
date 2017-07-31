/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('index',{
            url:'/index',
            views:{//设置了views属性 index的template和templateUrl等属性将被忽略
                'home':{
                    templateUrl:'home.html'//但是这里可以自己设置自己的controller等属性
                },
                'other':{
                    templateUrl:'other.html'
                }
            }
        });
    $urlRouterProvider.otherwise('index');
}]);