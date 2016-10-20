(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);


function InfoService() {
  var service = this;
  service.info = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    favorite: ""
  };

  service.saveInfo = function (info) {
    service.info = info;
  };


  service.getInfo = function () {
    return service.info;
  };

}



})();
