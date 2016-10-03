(function() {
  'use strict';

  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", foundItems)
  .constant("restURL", "https://davids-restaurant.herokuapp.com/menu_items.json");

  NarrowItDownController.$inject = ["MenuSearchService"];
  MenuSearchService.$inject = ["$http", "restURL"];

  function MenuSearchService($http, restURL) {
    var service = this;
    service.getMatchedMenuItems = function() {
      return $http({ method: 'GET', url: restURL}).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items;

        // return processed items
        return foundItems;
      });
    }
  };

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.searchText = "";
    ctrl.foundItems = [];
    ctrl.findMatchingItems = function() {
      MenuSearchService.getMatchedMenuItems().then(function(result) {
        ctrl.foundItems= [];
        for ( var item in result ) {
          if ( result[item].description.toLowerCase().includes(ctrl.searchText.toLowerCase())) {
            ctrl.foundItems.push(result[item]);
          }
        }
      });
    };

    ctrl.removeFound = function(index) {
      ctrl.foundItems.splice(index,1);
    };

  };

  function foundItems() {
    var ddo = {
      restrict: "E",
      templateUrl: "founditems.html",
      scope: {
        foundItems: "<",
        onRemove: "&"
      }
    };

    return ddo;
  };
})();
