(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://murmuring-chamber-47402.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
