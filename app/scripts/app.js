(function() {
  var angularjsTutorialApp;

  angularjsTutorialApp = angular.module("angularjsTutorialApp", []).config([
    "$routeProvider", function($routeProvider) {
      return $routeProvider.when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]);

}).call(this);
