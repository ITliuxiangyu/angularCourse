/**
 * Created by qingyun on 16/9/18.
 */
//以一个网络请求的demo来说明provider
angular.module('myProvider',[])
.provider('selfHTTP',[function () {
    //初始化请求的url和请求类型
    var defaultUrl = 'headline.json';
    var defaultMethod = 'get';
    return{
        //创建方法以便在config中使用
        setHttpUrl:function (url) {
            if(url){
                defaultUrl = url;
            }
        },
        setMethod:function (method) {
            if(method){
                defaultMethod = method;
            }
        },
        getDefaultUrl:function () {
            return defaultUrl;
        },
        //$get方法是我们的对象实例,返回一个网络请求的方法
        $get:["$http",function ($http) {//这里必须有$get方法
            return $http({method:defaultMethod,url:defaultUrl});
        }]
    }
}]);

