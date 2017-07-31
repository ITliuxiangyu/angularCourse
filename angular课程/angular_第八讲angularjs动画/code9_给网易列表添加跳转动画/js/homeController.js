/**
 * Created by qingyun on 16/9/20.
 */
angular.module('myApp.homeController',[])
.controller('homeController',['$scope','$http','$location','getNewsDataFromFactory',function ($scope,$http,$location,getNewsDataFromFactory) {
    $scope.mine = {
        newsListArray:[],
        goToDetailView:goToDetailView
    };
    // console.log(getDataFromFactory);
    $scope.mine.newsListArray = getNewsDataFromFactory.data.T1348647853363;
    $scope.mine.newsListArray.splice(0,1);
    // console.log($scope.mine.newsListArray);
    // function getNewsData() {
    //     var myUrl = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html';
    //     var url = 'http://localhost:3000/?myUrl=' + myUrl + '&callback=JSON_CALLBACK';
    //     $http({
    //         method:'jsonp',
    //         url:url,
    //         timeout:120000
    //     }).then(function success(result) {
    //         result = result.data;
    //         result = result.T1348647853363;
    //         result.splice(0,1);
    //         $scope.mine.newsListArray = result;
    //     },function error(error) {
    //
    //     })
    // }
    // getNewsData();
    function goToDetailView(index) {
        $location.path('/summary/' + $scope.mine.newsListArray[index].postid);
    }
}]);