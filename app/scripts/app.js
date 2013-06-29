(function() {

  this.angTut = angular.module("angTut", ['LocalStorageModule', 'ngResource', 'uploaderComponent']);

  this.angTut.constant('uploadServiceUrl', 'http://192.168.0.3/api/index.php');

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
      $routeProvider.when("/upload", {
        templateUrl: "views/Todos/upload.html",
        controller: "TodosUploadController"
      });
      $routeProvider.when("/upload_with_custom_data", {
        templateUrl: "views/Todos/upload_with_custom_data.html",
        controller: "TodosUploadController"
      });
      return $routeProvider.otherwise({
        redirectTo: "/"
      });
    }
  ]);

}).call(this);
