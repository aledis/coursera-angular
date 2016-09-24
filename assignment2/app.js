(function() {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyShoppingController", ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOff);

  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];

  function  ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.buyList = ShoppingListCheckOffService.toBuyList;

    toBuy.bought = function(index) {
      ShoppingListCheckOffService.itemBought(index);
    }
  };
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var bought = this;

    bought.boughtList = ShoppingListCheckOffService.boughtList;
  };
  function ShoppingListCheckOff() {
    var service = this;

    service.toBuyList = [ {name:"cookies", quantity:10},
                         {name:"chocolates", quantity:3},
                         {name:"salami", quantity:2}];
    service.boughtList = [];

    service.itemBought = function(index) {
      service.boughtList.push(service.toBuyList[index]);
      service.toBuyList.splice(index,1);
    }
  };
})();
