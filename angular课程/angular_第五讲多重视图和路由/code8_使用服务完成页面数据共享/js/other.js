/**
 * Created by qingyun on 16/9/30.
 */
angular.module('other',[]).controller('otherController',['$scope','nameArray',function ($scope,nameArray) {
    $scope.changeHomeVal = function () {
        nameArray.array = [1,2,3,4,5];
    };
    $scope.goBack = function () {
        window.history.go(-1);
    };
}]);