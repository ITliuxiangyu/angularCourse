/**
 * Created by qingyun on 16/9/19.
 */
angular.module('myApp',['ngRoute'])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'home.html',//当前路由模板路径
        controller:'homeController',//为当前路由指定控制器
        resolve:{//这里用resolve提前进行一些操作 然后把getDataFromFactory注入到controller中
            getDataFromFactory:function (getData) {
                return getData.getDataFromJSON();
            },
            getDataFromJSON: function (GetData) {
                return GetData;
            },
            recieveData: function (GetDataTwo) {
                return GetDataTwo.getDataFromFile;
            }
        }
    });
    $routeProvider.otherwise({redirectTo:'/'})

}])
    .factory('getData',['$http',function ($http) {
    return {
        getDataFromJSON:function () {
            return $http({method:'get',url:'headline.json'});
        }
    };
}])
    .factory('GetData', ['$http', function ($http) {

        return function () {
            // $http.get('js/wy.json')
            return $http({method: 'get', url: 'headline.json'});
        };

    }])
    .factory('GetDataTwo', ['$http', function ($http) {
        return {
            getDataFromFile: $http({method: 'get', url: 'headline.json'})
        };
    }])
.controller('homeController',['$scope','getDataFromFactory','getDataFromJSON','recieveData',function ($scope,getDataFromFactory,getDataFromJSON,recieveData) {//这里可以注入resolve返回的服务
    $scope.name = 'hello 我是home页面';
    // console.log(getDataFromFactory.data);
    console.log(getDataFromJSON());
    console.log(recieveData);
}]);
//<meta name="fragment" content="!"/>