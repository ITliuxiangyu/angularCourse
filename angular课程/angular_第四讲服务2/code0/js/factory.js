/**
 * Created by qingyun on 16/11/8.
 */
angular.module('myApp.factory',[]).factory('MyFactory',function ($http) {
    return {
        getData:function (fun) {
            $http.get('wy.json').success(function (result) {
                fun(result);
            })
        }
    }
});