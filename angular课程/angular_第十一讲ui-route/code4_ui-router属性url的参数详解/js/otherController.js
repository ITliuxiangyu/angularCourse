/**
 * Created by qingyun on 16/10/2.
 */
angular.module('myApp.other',[]).controller('otherController',['$scope','$stateParams',function ($scope,$stateParams) {
    $scope.goBack = function () {
        window.history.go(-1);
    };
    //ngRoute接收参数用的是$routeParams,ui-router用的是$stateParams
    console.log($stateParams.id);
}]);