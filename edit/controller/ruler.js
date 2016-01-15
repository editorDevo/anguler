/*
  @ todo 主控制器
 */
app.controller('ruler', ['$scope',function($scope) {

	 //是否隐藏控制
		$scope.hidenRuler=null;
		$scope.$on('changeHidenRuler',function(evt,data){
			$scope.$apply(function(){
				$scope.hidenRuler=data;
			});
		});
	





}]);