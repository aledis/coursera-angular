(function(){
	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['InfoService'];
	function SignUpController(InfoService)
	{
		var signup = this;
		signup.info = InfoService.getInfo();

		signup.submit = function() {
			InfoService.saveInfo(signup.info);
		};
	};
})();