app.directive('senceDir', ['$document','$compile',function($document,$compile) {

    return {
        link : function(scope,element,attr){

            function showMenu(e){
                var x = e.pageX;
                var y = e.pageY;
                var foubackgroud="<div right-click class='foubackgroud'></div>";
                var html="<div class='right-click-menu' style='top:"+y+"px;left:"+x+"px;' >" +
                    "<div class='ads-row' >"+
                    "<a class='ads-row' href='javascript:;'><i class='ion-ios-help-outline'></i> 技术问题？</a>"+
                    "<a class='ads-row' href='javascript:;'><i class='ion-social-dropbox-outline'></i> Editor版本v1.0.1</a>"+
                    "</div>"+
                    "</div>";

                var template = angular.element(html);
                angular.element(document.body).append(foubackgroud);
                var $bg=angular.element(document.querySelector('.foubackgroud'));
                $bg.append(template);
                $compile($bg)(scope);
            }





            element.on('contextmenu',function(e){
                showMenu(e);
            });

        }
    }


}]);

app.directive('rightClick', ['$document',function($document) {
  return {
      link:function(scope,element,attr){
          // remove移除创建的元素
          console.log(element);
          element.on('mousedown',function(){
              element.remove();
          });

        }
  }
}]);
