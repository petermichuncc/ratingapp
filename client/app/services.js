/*jslint node: true */
/*global angular */
"use strict";

angular.module("myApp.services", []).factory("Site", function($resource) {
  return $resource('/api/sites/:id', {
    id: '@id'
  }, {
    update: {
      method: "PUT"
    },
    remove: {
      method: "DELETE"
    }
  });
});
