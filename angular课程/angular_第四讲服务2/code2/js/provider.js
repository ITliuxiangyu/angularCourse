/**
 * Created by qingyun on 16/9/18.
 */
angular.module('provider1',[])
.factory('MyFactory',[function () {
    return {
        'userName':'张三'
    }
}])
.constant('testStr','哈哈')
.provider('foo',["testStr",function (testStr) {//provider里不能注入后与它的服务
    return{
        $get:function () {//这里必须有$get方法
            console.log(testStr);
            return {
                'userName':'张三'
            }
        }
    }
}]);
