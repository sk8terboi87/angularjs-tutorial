(function() {

  this.angTut = angular.module("angTut", ['LocalStorageModule', 'ngResource']);

  this.angTut.config([
    "$routeProvider", function($routeProvider) {
      var $routerprovider;
      $routerprovider = $routeProvider;
      $routeProvider.when("/", {
        templateUrl: "views/Pages/welcome.html",
        controller: "PagesController"
      });
      $routeProvider.when("/add", {
        templateUrl: "views/Todos/add.html",
        controller: "TodosController"
      });
      return $routeProvider.otherwise({
        redirectTo: "/"
      });
    }
  ]);

}).call(this);
