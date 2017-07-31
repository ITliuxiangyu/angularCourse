/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
    /*
        * abstract属性表示抽象模板永远不能被激活,但是可以设置被激活的子节点
        * 可以使用抽象模板提供一个模板包装器来包裹多个命名视图,或者传递$scope给子节点,你还可以使用它们来传递解析后的依赖或者自定义数据
        * */
        .state('index',{
            url:'/index',
            abstract:true,
            templateUrl:'index.html'
        })
        .state('index.home',{
            url:'/home',
            templateUrl:'home.html'
        })
        .state('index.other',{
            url:'/other',
            templateUrl:'other.html'
        });
    $urlRouterProvider.otherwise('index/home');
}]);