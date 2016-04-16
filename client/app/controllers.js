/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";
/*app.controller('MyController', function ($scope) {
            //This will hide the DIV by default.
            $scope.IsHidden = true;
            $scope.ShowHide = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }
        });*/
angular.module("myApp.controllers", []).controller("siteCtrl", function($scope, Site,$timeout) {
  
  $scope.sites = Site.query();
  $scope.newSite = { };
  
  $scope.addSite = function(/** String */ artist, /** String */ url, /** String */ title) {
    var site = new Site();
    site.artist = artist;
    site.url = url;
    site.title = title;
    site.score = 0;
    site.$save(function(response) {
      $scope.sites.push(response);
    });

    $scope.newSite.title = "";
    $scope.newSite.url = "";
    $scope.newSite.artist = "";
  };
  
  $scope.updateSite = function(site) {
    site.$update();
  };
  
  $scope.deleteSite = function(/** Site */ site) {
    var idx = $scope.sites.indexOf(site);
    if (idx >= 0) {
      $scope.sites.splice(idx, 1);
    }
    site.$remove();
  };
  
  $scope.isEmpty = function(/** String */ str) {
    return _.isBlank(str);
  };
            $scope.IsHidden = true;
            $scope.ShowHide = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }

 $scope.display = function() {
  
        $scope.alertDisplayed = true;
      $timeout(function() {
        $scope.alertDisplayed = false;
      }, 5000)
    };
    
    $scope.alertDisplayed = false;



});

 /*angular.module("myApp.controllers", []).
  controller('testController', function($scope, $timeout) {
    
   
  })*/

