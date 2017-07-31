/**
 * Created by qingyun on 16/10/2.
 */
angular.module('myApp.home',[]).controller('homeController',['$scope','$state','$location',function ($scope,$state,$location) {
    //ui-router给我们提供了一个状态服务$state可以来完成改变状态跳转页面,同样$location服务还是可以使用的,只是$location服务直接改变的是路由
    $scope.goToOtherView = function () {
        // console.log($state);
        // $state.go('other');//它查找的是状态,如果没参数会自动加个/
        $state.go('other',{id:'1'});//$state采用对象形式传参数,比$location参数拼接的更加人性化
        // $location.path('/other/3');
        // $location.path('/other/1');

        // $location.url('other/?id=2')
    }
}]);
