/**
 * Created by qingyun on 16/10/1.
 */
angular.module('myApp.factory',[]).factory('getData',['$http','$rootScope',function ($http,$rootScope) {
    return {
        getJSON : function () {
           $http.get('wy.json').success(function (result) {
               $rootScope.$broadcast('sendData',result);
               return result;
           }).error(function (error) {

           });
        }
    }
}]);