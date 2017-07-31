/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router','myApp.home','myApp.other']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('home',{//home代表的只是状态不是ngRoute中#后面的名称
            url:'/home',//url可以给应用程序的状态分配一个唯一的URL,这个url选项提供了与深度链接同样的功能,它通过状态导航应用,而不是简单的通过URL导航,这个选项类似于ngRoute的URL,可以当做为ngRoute的升级版。url可以接受一些不同的选项,可以设置参数
            templateUrl:'home.html',
            controller:'homeController'
        })
        .state('other',{
            // url:'/other/:id',
            // url:'/other/{id}',
            // url:'/other/{id: [0-9]}',//可以跟正则表达式,但是ngRoute不能跟
            // url:'/other/?id',//指定查询参数的形式传参,这种和get请求接口放参数类似,这时必须用$location.url();传参
            // url: '/other/{id:.*}',//这种意思是捕获所有
            url:'/other',
            params:{//注:其不能和url带参数时一起使用 同时使用的话params会失效
              id:''//params属性是ui-router专门为传参数设计的属性,这种传参数方式大大增加我们的数据安全,因为这种方式传递的参数在浏览器上是看不到的,可以参考post传参的形式,建议以后传递参数都使用params属性
            },
            templateUrl:'other.html',
            controller:'otherController'
        });
    $urlRouterProvider.otherwise('/home');
}]);
