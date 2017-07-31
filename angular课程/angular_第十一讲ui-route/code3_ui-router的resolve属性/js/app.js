/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp',['ui.router']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('home',{//home代表的只是状态不是ngRoute中#后面的名称
            url:'/home',
            templateUrl:'home.html',//和ngRoute一致
            // template:"<div>hello</div>"//和ngRoute一致

            /*
            * resolve就是一个对象,其中键就是要注入到控制器中的依赖名称,而其值就是待解析的服务factories,如果值是一个字符串,angular-route就会尝试匹配一个现有的注册服务,如果是一个函数,而函数的返回值就是依赖,如果这个函数返回一个promise,它会在控制器被实例化之前解析,同时其值就会被注入到控制器中,这些ngRoute和ui-router是一致的
            * */
            resolve:{
                myFoo:'foo',
                //只有当状态被激活并且状态的所有依赖项都被注入时，$stateParams对象才存在。这代表你不能再状态的resolve函数中使用$stateParams对象，可以使用$state.current.params来代替
                //当结果不是promise时立刻返回
                person:function (myFoo) {
                    myFoo.test();//这里可以直接使用myFoo,myFoo已经被实例化成服务
                    return {
                        name:'air',
                        email:'air@qq.com'
                    }
                },
                //当函数返回一个promise,它会在控制器实例化前解析
                setHttp:function ($http) {
                    return $http({
                        method:'get',
                        url:'wy.json'
                    })
                },
                /*
                * 在ngRoute中我们创建的resolve对象是不能被其他对象引用的,即使顺序没问题也不行,其函数里传入的必须是服务创建的实例,而ui-router更加智能,其会帮助我们自动把我们的函数实例成服务,而ngRoute是注入到控制器中才实例成服务的
                * */
                //可以在另一个解析中使用上面返回的promise
                getData:function (setHttp) {
                    return setHttp.data;
                }
            },
            controller:['$scope','person','setHttp','getData','myFoo',function ($scope,person,setHttp,getData,myFoo) {
                console.log(myFoo);//这里的myFoo代表的就是foo服务
                console.log(getData);
            }]
        });
    $urlRouterProvider.otherwise('/home');
}]).factory('foo',[function () {
    return {
        test:function () {
            console.log('hello');
        }
    }
}]);
