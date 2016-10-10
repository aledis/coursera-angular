(function() {
    angular.module('data')
    .constant("categoriesURL", "https://davids-restaurant.herokuapp.com/categories.json")
    .constant("itemsURL", "https://davids-restaurant.herokuapp.com/menu_items.json")
    .service('MenuDataService', MenuService);

    MenuService.$inject = ["$http", "categoriesURL","itemsURL"];

    function MenuService($http, categoriesURL, itemsURL) {
      var service = this;
      service.getAllCategories = function() {
        return $http({ method: 'GET', url: categoriesURL}).then(function (result) {
          // process result and only keep items that match
          var foundItems = result.data;

          // return processed items
          return foundItems;
        });
      };

      service.getItemsForCategory = function(categoryShortName) {
        return $http({ method: 'GET', url: itemsURL+"?category="+categoryShortName}).then(function (result) {
          // process result and only keep items that match
          var foundItems = result.data;

          // return processed items
          return foundItems;
        });
      };
    };

})();
