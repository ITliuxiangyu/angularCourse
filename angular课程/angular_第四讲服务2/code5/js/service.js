/**
 * Created by qingyun on 16/9/18.
 */
angular.module('service',[])
.service('MyService',['$http','$timeout',function ($http,$timeout) {
    this.att = "MyService";
    this.fun = function() {
        // 持有方法;
    };
}]).factory('MyFactory',['$http','$timeout','MyService',function ($http,$timeout,MyService) {
    return {
        att:'MyFactory',
        doSome:function () {
            console.log('在MyFactory里我使用了' + MyService.att);
        }
    };

}]);
