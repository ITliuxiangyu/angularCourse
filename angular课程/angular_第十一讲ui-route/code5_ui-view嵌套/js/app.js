/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('index',{
            url:'/home',
            templateUrl:'home.html'
        })
        .state('index.other',{
            //默认子状态的url是附在父状态的url之后的
            //^代表绝对路由 子状态的url没有附在父状态的url之后的
            url:'^/other/{id}',
            templateUrl:'other.html'
        });
    $urlRouterProvider.otherwise('/home');
}]);
