(function(){
	angular.module('common')
	.directive('favoriteItem', FavoriteItem);

	FavoriteItem.$inject = ['MenuService'];

	function FavoriteItem(MenuService) {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				ctrl.$asyncValidators.favoriteItem = function(modelValue,viewValue) {
					return MenuService.getItem(modelValue);	
				};
			}
		};
  	};
   
})();