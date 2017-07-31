/**
 * Created by qingyun on 16/9/18.
 */
angular.module('myApp',['myProvider']).config(function (selfHTTPProvider,$provide) {
    $provide.decorator('selfHTTP',function ($delegate) {
        /*
        * $delegate是可以进行装饰的最原始的服务,对其进行扩展就相当于对服务进行扩展
        * */
        $delegate.doSomeThing = function () {
            console.log('添加成功');
        };
        console.log($delegate);
        //由于装饰器不仅可以扩展服务,还可以中断服务,在我们扩展的时候就是在中断服务中进行的操作,所以我们操作完成以后就需要返回这个原始服务,否则服务本来具有的属性或者新加的服务就不能使用
        return $delegate;
    });
    // console.log(selfHTTPProvider);

}).controller('myController',['$scope','selfHTTP',function ($scope,selfHTTP) {
    //扩展方法成功后就可以和使用以前方法一样的使用新加的属性或者方法了
    selfHTTP.doSomeThing();
    selfHTTP.success(function (data) {
        // console.log(data);
    })
}]);

