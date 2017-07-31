/**
 * Created by qingyun on 16/9/18.
 */
angular.module('myApp',['services']).config([function () {
    //这里可以配置
}]).controller('myController',['$scope','MyService','MyFactory',function ($scope,MyService,MyFactory) {
    /*
    * service和factory的使用方法一致,都是在内置服务之后进行注入
    * 打印后的结果都是对象
    * */
    console.log(MyService);
    console.log(MyFactory);
}]).controller('otherController',['$scope','MyService','MyFactory',function ($scope,MyService,MyFactory) {
    /*
     * service和factory的使用方法一致,都是在内置服务之后进行注入
     * 打印后的结果都是对象
     * */
    console.log(MyService);
    console.log(MyFactory);
}]);
