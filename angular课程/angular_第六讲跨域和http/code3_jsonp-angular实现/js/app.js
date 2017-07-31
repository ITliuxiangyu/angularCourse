/**
 * Created by qingyun on 16/9/20.
 */
angular.module('myApp',[]).config(['$httpProvider',function ($httpProvider) {
    // console.log($httpProvider);
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-with'];
}]).controller('myController',['$scope','$http',function ($scope,$http) {
    $scope.getData = function () {
        var myUrl = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-10.html';
        $http({
            method:'jsonp',
            url:'http://localhost:3000/?myUrl=' + myUrl + '&callback=JSON_CALLBACK'
            //需要注意的是在angular里callback必须等于JSON_CALLBACK,这点和原生的随便给方法名称不同,其实其和ajax类似,ajax不需要自己给方法名ajax会自己随机给一个,angular其实也是自己随机生成一个方法名,JSON_CALLBACK其实就是告诉angular自己随机生成一个方法名
        }).then(function success(result) {
            console.log(result);
        },function error(e) {
            console.log(e);
        })
    };

}]);