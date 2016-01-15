/*
  @ todo 主控制器
 */
app.controller('mainQuick', ['$scope',function($scope) {

    $scope.ToolMove='move'; //拖动
    $scope.ToolPencil='pencil'; //绘制图形
    $scope.ToolTxt='txt'; //文本
    $scope.ToolCircular='circular'; //圆形
    $scope.ToolSquare='square'; //正方形
    $scope.ToolImg='img'; //图片
    $scope.ToolAudio='audio'; //音乐
    $scope.ToolVedio='vedio'; //图片
    $scope.ToolZoom='zoom'; //图片
    $scope.ToolPugin='pugin'; //图片
    $scope.ToolPickcolor='pickcolor'; //图片


    $scope.$on('changeActiveToolType',function(evt,data){
        $scope.$apply(function(){
            $scope.ActiveToolType = data;
        })
    });

    $scope.hidenTool=null;
    $scope.$on('changeHidenTool',function(evt,data){
        $scope.$apply(function(){
            $scope.hidenTool=data;
        });
    });




}]);