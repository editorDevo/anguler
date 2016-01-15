app.directive('rulerDir', ['$document','$compile',function($document,$compile) {

    return {
        link : function(scope,element,attr){
			
			var rulerWidth = 5;
			
            function createRulerElemet(element){
				var offset = 0, direction ="", temp="", id = element.attr("id"),j=0,offsetName="";
				id.indexOf("left")!=-1?(direction = "top")&&((offset = element[0].offsetHeight)&&(offsetName="width")):(direction = "left")&&((offset = element[0].offsetWidth)&&(offsetName="height"));
				for(var i =-1;i<offset;i=i+rulerWidth){
					var height = "";
					if(j%5==0&&j>0){
						height = offsetName+":10px";
					}
					temp+="<span class='"+direction+"_kd' style='"+direction+":"+i+"px;"+height+"'></span>";
					j++;
				}
				element.html(temp);
            }
			createRulerElemet(element);
			
			//防止频繁重绘
			var timer = null;
			angular.element(window).on('resize',function(){
				if(timer) clearTimeout(timer);
				
				timer = setTimeout(function(){
					createRulerElemet(element);
				},200);
			});
        }
    }


}]);

