'use strict';

angular.module('integrationApp')
  .controller('GridLayoutCtrl', function ($scope, $famous) {
    var Engine = $famous['famous/core/Engine'];
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.enginePipe = new EventHandler();
    Engine.pipe($scope.enginePipe);

    $scope.enginePipe.on('click', function(){
      $scope.changeDimensions();
      if(!$scope.$$phase) $scope.$apply();
    })

    $scope.gridLayoutOptions = {
      dimensions: [1, 3]
    }

    $scope.changeDimensions = function(){
      console.log('changing dimensions')
      $scope.gridLayoutOptions.dimensions[0]++;
    }

  });
