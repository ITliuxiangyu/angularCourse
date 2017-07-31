/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('index',{
            url:'/index',
            abstract:true,
            templateUrl:'index.html'
        })
        .state('index.home',{
            url:'/home',
            templateUrl:'home.html',
            /*
            * angular会在用户进入或离开视图时调用这些回调函数,对于这两个属性你可以设置希望调用的函数,最常用的场景就是触发一些行为判断,比如用户离开或进入页面的时候我们给予一些提示或者后台操作
            * */
            onEnter:function () {
                console.log('我进入到home页面了')
            },
            onExit:function () {
                console.log('我离开home页面了');
                alert('你确定要离开home页面吗');
            }
        })
        .state('index.other',{
            url:'/other',
            templateUrl:'other.html'
        });
    $urlRouterProvider.otherwise('index/home');
}]);