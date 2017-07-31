/**
 * Created by qingyun on 16/9/18.
 */
angular.module('myApp',['provider1']).config(function ($provide,$injector) {
    /*
    * 所有的服务工厂都是由$provide服务创建的,$provide服务负责在运行时初始化这些提供者
    * 提供者是一个具有$get方法的对象,$injector通过调用$get方法创建服务示例
    * 这里在config里打印是config运行在服务创建之前
    * */
    console.log($provide,$injector);
    // console.log($injector);
}).controller('myController',['$scope','foo',function ($scope,foo) {

}]);