app.directive('moveEvent', ['$document',function($document) {

    return {
        link : function(scope,element,attr){

            //注册鼠标事件
            /*===todo====================面板拖动事件======================================*/
            var isMove = false,stopPotion=null,isMoveTool=true;

            var TargertStart = null;
            element.on('mousedown',function(e){

                isMove = true;
                stopPotion = e;
                var toolWindow = attr['windowType'];
                isMoveTool = toolWindow =='tool-window'? true:false;
                TargertStart = isMoveTool? {
                    x : angular.element(element)[0].offsetLeft
                    ,y : angular.element(element)[0].offsetTop
                } : null;
                angular.element(document.querySelector('.on-drap-window')).removeClass('on-drap-window');
                angular.element(element).addClass('on-drap-window');
            });
            element.on('mouseup',function(e){
                isMove = false;
                stopPotion = null;
                TargertStart = null;
            });
            element.on('mouseout',function(e){
                isMove = false;
                stopPotion = null;
                TargertStart = null;
            });
            element.on('mousemove',function(e){
                //拖动某面板
                if(isMove){
                    var X = e.pageX;
                    var Y = e.pageY;
                    var moveX = X - stopPotion.pageX;
                    var moveY = Y - stopPotion.pageY;

                    angular.element(element)[0].style['top']=TargertStart.y +moveY + 'px';
                    angular.element(element)[0].style['left']=TargertStart.x +moveX + 'px';

                }
            });
        }
    }


}]);
