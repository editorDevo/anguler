var app = angular.module('MyApp',[]);
/*
  @ todo 主控制器
 */
app.controller('myCtrl', ['$scope',function($scope) {

    $scope.type =[
        'imgs'      // 图片
        ,'musics'   // 音频
        ,'videos'   // 视频
        ,'bgmusic'  // 背景音乐
        ,'svgs'     // 绘图 lines 各种闭合不闭合的图形
        ,'txts'     // 文本
    ];

    $scope.selectedItem = null; //选择组件 选择就是object
    $scope.isSelectedItem = true; //是否选择了某组件 触发快捷键

    $scope.ToolType = null; //工具的类型

    $scope.mouseFouceTargert = null; //鼠标点击的目标

    $scope.copyItemCache = null;
    $scope.isCut = false; //是否是剪切

    $scope.hidenTool = false; //是否隐藏工具面板
    $scope.$on('updataToolStute',function(evt,data){
        $scope.hidenTool = data;
		console.log(data)
        //向下广播数据
        $scope.$broadcast('changeHidenTool',$scope.hidenTool);
    });




	$scope.hidenRuler = false; //是否隐藏标尺
    $scope.$on('updataRulerStute',function(evt,data){
        $scope.hidenRuler = data;
		console.log(data)
        //向下广播数据
        $scope.$broadcast('changeHidenRuler',$scope.hidenRuler);
    });






    //焦点在舞台
    $scope.isOnSence = function(){

    };

    //向下广播数据
    //$scope.$broadcast('windowTargertChange',$scope.windowTargert);


















    /*====todo================组件事件========================================*/
    //复制
    $scope.copy=function(){
        if($scope.selectedItem==null || !$scope.fouceSecen) return;
        $scope.copyItemCache = $scope.selectedItem;
        console.log('复制'+$scope.copyItemCache);
    };

    //粘贴
    $scope.paste=function(){
        if($scope.copyItemCache==null || !$scope.fouceSecen) return;

        if($scope.isCut){
            $scope.isCut=false;
            console.log('剪切>粘贴'+$scope.copyItemCache);
            $scope.copyItemCache = null; //清空剪切板
            $scope.selectedItem = null; //清空剪切板
            return;
        }
        console.log('复制>粘贴'+$scope.copyItemCache);
    };

    //剪切
    $scope.cut=function(){
        if($scope.selectedItem==null || !$scope.fouceSecen) return;
        $scope.isCut = true;
        $scope.copyItemCache = $scope.selectedItem;
        console.log('剪切'+$scope.copyItemCache);
    };

    //剪切
    $scope.dele=function(){
        if($scope.selectedItem==null || !$scope.fouceSecen) return;
        console.log('删除*'+$scope.selectedItem);
        $scope.selectedItem = null;

    };






}]);