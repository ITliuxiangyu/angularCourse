/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp.home',[]).controller('homeController',['$scope','$location','getData',function ($scope,$location,getData) {
    $scope.getDataFormJSON = function () {
        var result = getData.getJSON();
        console.log(result);//这里是获取不到的,因为是回调
    };
    $scope.$on('sendData',function (evt,msg) {
        console.log(msg);
    })
}]);