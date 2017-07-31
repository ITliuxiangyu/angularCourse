/**
 * Created by qingyun on 16/9/30.
 */
angular.module('home',[]).controller('homeController',['$scope','$location','nameArray',function ($scope,$location,nameArray) {
    $scope.mine = {
        nameArray : nameArray.array
    };
    $scope.goToOtherView = function () {
        $location.path('/other');
    };
}]);