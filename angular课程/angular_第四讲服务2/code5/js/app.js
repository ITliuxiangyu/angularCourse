/**
 * Created by qingyun on 16/9/18.
 */
angular.module('myApp',['service']).config([function () {
    //这里可以配置
}]).controller('myController',['$scope','MyFactory',function ($scope,MyFactory) {
    MyFactory.doSome();
}]);
