(function() {
      'use strict';

      angular.module("LunchChecker", [])

      .controller("LunchQuantityController", function($scope) {
         $scope.items = "";
         $scope.lunchQuantityMessage="";
         $scope.messageStyle={color:'green'};
         $scope.textboxStyle={'border-color':'green', 'border-width':'4px'};

         $scope.checkLunchQuantity = function() {
           $scope.messageStyle={color:'green'};
           $scope.textboxStyle={'border-color':'green', 'border-width':'4px'};
           if ( !$scope.items.trim() ) {
             $scope.messageStyle = {color:'red'};
             $scope.lunchQuantityMessage= "Please enter data first!";
             $scope.textboxStyle={'border-color':'red', 'border-width': '4px'};
           }
           else if ( isTooMuch($scope.items) ) {
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
