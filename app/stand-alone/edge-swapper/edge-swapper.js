angular.module('edge-swapper', ['ui.router', 'famous.angular'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/a");
    $stateProvider
      .state("a", {
        url: "/a",
        templateUrl: "views/a.html"
      })
      .state("b", {
        url: "/b",
        templateUrl: "views/b.html"
      })
      .state("c", {
        url: "/c",
        templateUrl: "views/c.html"
      });

  });

angular.module('edge-swapper').controller('EdgeSwapperCtrl', ['$scope','$state', function($scope, $state){
  var srcs = ['a', 'b', 'c'];
  var index = 0;

  window.onclick = function(){
    index = (index + 1) % 3;
    $state.go(srcs[index]); // comment if not using ui-view
    //$scope.$apply(); // uncomment if not using ui-view
  }
  $scope.getSrc = function(){
    var ret = 'views/' + srcs[index] + '.html';
    return ret;
  }
}]);
