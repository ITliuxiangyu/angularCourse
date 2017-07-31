/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'home.html',
        controller:'homeController',
        resolve:{
            myFoo:'getData',//这里ui-router和ngRoute一样都会根据字符串查找服务
            getDataFromFactoryTest:function (myFoo) {
                /*
                * 虽然myFoo是代表getData服务,但是其还是不能在自己对象内部相互使用,其实就只有一点原因,ngRoute是在注入到控制器后才实例化成服务给控制器使用,在其没有注入到控制器前不会帮助我们实例化成服务,所以myFoo现在不是服务,不能使用,这种情况ui-router是可以使用的
                * */
                return myFoo.getDataFromJSON();
            },
            getDataFromFactory:function (getData) {
                return getData.getDataFromJSON();
            },
            // getResult:function (getDataFromFactory) {//这里这样写会出错,这里的传入的参数必须是服务才能使用,但是ngRoute中的resolve并没有把getDataFromFactory这个函数实例化成服务,它现在还只是resolve对象里的一个函数对象,而ui-router则会帮助我们实例化成服务,更加智能更加自由好用
            //     return getDataFromFactory.data;
            // }
        }
    });
    $routeProvider.otherwise({redirectTo:'/'})

}]).factory('getData',function ($http) {
    return {
        getDataFromJSON:function () {
            return $http({method:'get',url:'headline.json'});
        }
    };
})
.controller('homeController',['$scope','getDataFromFactory','myFoo',function ($scope,getDataFromFactory,myFoo) {//这里可以注入resolve返回的服务
    console.log(getDataFromFactory.data);
    console.log(myFoo);
}]);
//<meta name="fragment" content="!"/>