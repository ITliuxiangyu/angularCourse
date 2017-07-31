/**
 * Created by qingyun on 16/9/20.
 */
angular.module('myApp',[]).config(['$httpProvider',function ($httpProvider) {
    // console.log($httpProvider);
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-with'];
}]).controller('myController',['$scope','$http',function ($scope,$http) {
    $scope.getData = function () {
        $scope.doSome = function () {
            alert('2222');
        };
        var myUrl = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-10.html';
        var url = 'http://localhost:3000/?myUrl=' + myUrl + '&callback=JSON_CALLBACK';
        var promise = $http({
            method:'jsonp',
            url:url,
            timeout:$scope.doSome()
        });
        promise.then(function (result) {
            console.log(result);
        },function (error) {

        });

    };

}]);