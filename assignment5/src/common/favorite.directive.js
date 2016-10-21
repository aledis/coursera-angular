(function(){
	angular.module('common')
	.directive('favoriteItem', FavoriteItem);

	FavoriteItem.$inject = ['MenuService','$q'];

	function FavoriteItem(MenuService, $q) {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				ctrl.$asyncValidators.favoriteItem = function(modelValue,viewValue) {
					if ( modelValue ) {
						return MenuService.getItem(modelValue);	
					}
					return $q.resolve(true);
				};
			}
		};
  	};
   
})();