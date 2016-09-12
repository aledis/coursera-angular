(function() {
      'use strict';

      angular.module("LunchChecker", [])

      .controller("LunchQuantityController", function($scope) {
         $scope.items = "";
         $scope.lunchQuantityMessage="";

         $scope.checkLunchQuantity = function() {
           if ( isTooMuch($scope.items) ) {
             $scope.lunchQuantityMessage= "Too much!";
           }
           else {
             $scope.lunchQuantityMessage= "Enjoy!";
           }
         };

         function isTooMuch(itemsStr) {
           var itemsArr = itemsStr.split(",");
           var nonEmptyItems = itemsArr.filter(nonEmpty);
           if ( nonEmptyItems.length > 3) {
             return true;
           }
           else {
             return false;
           }
         }

         function nonEmpty(str) {
           return str.trim();
         }
      });
   }
)();
