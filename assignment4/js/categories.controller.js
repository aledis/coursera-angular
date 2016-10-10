(function(){
  angular.module('Restaurant').
  controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService','categories'];
  function CategoriesController(MenuDataService, categories) {
    $ctrl = this;

    $ctrl.categories = categories;

  };
})();
