app.directive('toolManger', ['$document','$compile',function($document,$compile) {
    return {
        templateUrl:'component/tool.html'
        ,scope:false//切换为{}，true测试
        ,link:function(scope,element,attr){

            //工具加载

        }
    }

}]);
