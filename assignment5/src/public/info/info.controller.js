(function() {
	angular.module('public')
	.controller('InfoController', InfoController);

	InfoController.$inject = ['info', 'favoriteItem'];

	function InfoController(info, favoriteItem) {
		var $ctrl = this;
		$ctrl.info = info;

		$ctrl.favoriteItem = favoriteItem;
	};


})();