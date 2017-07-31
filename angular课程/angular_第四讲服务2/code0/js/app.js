/**
 * Created by qingyun on 16/11/8.
 */
angular.module('myApp',['myApp.factory']).config([function () {

}]).controller('myController',['$scope','MyFactory',function ($scope,MyFactory) {
    MyFactory.getData(function (data) {
        console.log(data);
    })
}]);