/*
  @ todo 主控制器
 */
app.controller('mainPage', ['$scope',function($scope) {


    //是否隐藏控制
    $scope.hidenTool=null;
    $scope.$on('changeHidenTool',function(evt,data){
        $scope.$apply(function(){
            $scope.hidenTool=data;
        });
    });




}]);