/**
 * Created by qingyun on 16/9/20.
 */
angular.module('myApp',[]).config(['$httpProvider',function ($httpProvider) {
    // console.log($httpProvider);
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-with'];
}]).controller('myController',['$scope','$http',function ($scope,$http) {
    $scope.getData = function () {
        $http({
            method:'POST',
            //Content-Type只能是 application/x-www-form-urlencoded, multipart/form-data 或 text/plain中的一种 这三种为简单请求,不需要浏览器进行预请求
            headers: {
                'Content-Type': 'text/plain'
            },
            url:'http://localhost:3000',
            data:{
                myUrl:'http://c.m.163.com/nc/article/headline/T1348647853363/0-10.html'
            }
        }).then(function success(result) {
            console.log(result);
        },function error(e) {
            console.log(e);
        })
    };

}]);