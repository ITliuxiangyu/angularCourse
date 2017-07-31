/**
 * Created by qingyun on 16/9/18.
 */
angular.module('myApp',['myProvider']).config(function (selfHTTPProvider) {
    /*
    * 这里的注入必须是provider名字加上Provider 如:selfHTTPProvider
    * provider服务创建的服务可以在config方法中进行初始化配置,然后在其他的作用域或者服务器使用配置后的设置
    * */
    // selfHTTPProvider.setHttpUrl('tourism.json');
    selfHTTPProvider.name = '2';
    console.log(selfHTTPProvider.name);

}).controller('myController',['$scope','selfHTTP',function ($scope,selfHTTP) {
    /*
    * 在controller里注入selfHTTP然后我们就可以使用配置后的设置
    * */
    selfHTTP.success(function (data) {
        console.log(data);
    })
}]);

