/**
 * Created by qingyun on 16/9/20.
 */
angular.module('myApp.summaryController',[])
.controller('summaryController',['$scope','$http','$location','$routeParams','$sce',function ($scope,$http,$location,$routeParams,$sce) {
    $scope.summary = {
        goBack:goBack,
        body:'',
        title:'',
        otherTitle:''
    };
    function goBack() {
        window.history.go(-1);
    }
    $http({
        method:'jsonp',
        url:"http://localhost:3000/?myUrl=" + "http://c.m.163.com/nc/article/" + $routeParams.postid + "/full.html" + '&callback=JSON_CALLBACK',
        timeout:120000
    }).then(function successCallback(result) {
        result = result.data;
        var parameter = $routeParams.postid;
        result = result[parameter];
        console.log(result);
        if(!result.body){
            console.log('内容为空');
            window.history.go(-1);
            return;
        }
        if(result.img && result.img.length){
            for (var i in result.img){
                // console.log(result.img[i].pixel.split('*'));
                var imgWidth = result.img[i].pixel.split('*')[0];
                if (imgWidth > document.body.offsetWidth){
                    imgWidth = document.body.offsetWidth;
                }
                var summaryClass = 'width:'+ imgWidth +'px';
                var str = "<img style='" + summaryClass + "' src='" + result.img[i].src + "'>";
                result.body = result.body.replace(result.img[i].ref,str);
            }
        }
        $scope.summary.title = $sce.trustAsHtml(result.title);
        $scope.summary.otherTitle = $sce.trustAsHtml(result.source + result.ptime);
        $scope.summary.body = $sce.trustAsHtml(result.body);
        // console.log(result);
    },function errorCallback(e) {

    })
}]);