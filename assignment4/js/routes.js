(function(){
  'use strict';

  angular.module('Restaurant')
  .config(ConfigRoutes);

  ConfigRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function ConfigRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl:'templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl:'templates/categories.template.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        categories: [ 'MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categories.items', {
      url: '/items/{catId}',
      templateUrl:'templates/items.template.html',
      controller: 'CategoryItemsController as ctrl',
      resolve: {
        categoryDetails: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.catId);
        }]
      }
    });
  };
})();
