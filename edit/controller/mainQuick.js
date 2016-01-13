/*
  @ todo 主控制器
 */
app.controller('mainQuick', ['$scope',function($scope) {

    $scope.hidenTool=null;
    $scope.$on('changeHidenTool',function(evt,data){
        $scope.$apply(function(){
            $scope.hidenTool=data;
        });
    })




}]);