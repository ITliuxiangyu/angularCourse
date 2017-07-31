/**
 * Created by qingyun on 16/9/18.
 */
angular.module('services',[])
.service('MyService',['$http','$timeout',function ($http,$timeout) {
    /*
    * 注册一个支持构造函数的服务
    * service是在当我们第一个使用的时候angular帮我们初始化一次
    * 然后以后使用的时候返回的都是这个对象
    * */
    this.att = "持有属性";

    this.fun = function() {

        // 持有方法;

    };
}]).factory('MyFactory',['$http','$timeout',function ($http,$timeout) {
    return {
        att:'各种属性',
        doSome:function () {

        }
    };

}]);
