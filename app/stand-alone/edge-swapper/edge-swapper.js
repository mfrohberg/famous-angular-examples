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

angular.module('edge-swapper').controller('EdgeSwapperCtrl', function($scope){
  var srcs = ['a', 'b', 'c'];
  var index = 0;

  window.onclick = function(){
    index = (index + 1) % 3;
    _opt.overlap = !_opt.overlap;
    $scope.$apply(); 
  }
  
  $scope.getSrc = function(){
    var ret = 'views/' + srcs[index] + '.html';
    return ret;
  }

  var _opt = {
    outTransition: true,
    inTransition: true,
    overlap: true
  }; 

  $scope.getOptions = function(){
    return _opt;
  };
});
