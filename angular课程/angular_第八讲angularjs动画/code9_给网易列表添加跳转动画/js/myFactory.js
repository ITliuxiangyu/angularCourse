/**
 * Created by qingyun on 16/9/20.
 */
angular.module('myApp.myFactory',[])
.factory('DataFactory',['$http',function ($http) {
    return {
        getNewData:function () {
            var myUrl = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html';
            var url = 'http://localhost:3000/?myUrl=' + myUrl + '&callback=JSON_CALLBACK';
            return $http({
                method:'jsonp',
                url:url,
                timeout:120000
            })
        },
        getSummaryData:function () {
            
        }

    }
}]);