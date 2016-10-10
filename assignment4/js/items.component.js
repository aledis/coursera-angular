(function(){
  angular.module('Restaurant')
  .component('itemsList', {
    templateUrl:'templates/itemslist.template.html',
    bindings: {
      items: '<'
    }
  })
})();
