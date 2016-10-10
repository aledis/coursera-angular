(function(){
  angular.module('Restaurant')
  .component('categoriesList', {
    templateUrl:'templates/categorieslist.template.html',
    bindings: {
      categories: '<'
    }
  });
})();
