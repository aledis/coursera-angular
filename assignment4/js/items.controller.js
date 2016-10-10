(function(){
  angular.module('Restaurant')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['MenuDataService', 'categoryDetails'];

  function CategoryItemsController(MenuDataService, categoryDetails) {
    ctrl = this;
    ctrl.items = categoryDetails.menu_items;
    ctrl.category_name = categoryDetails.category.name;
  };

})();
