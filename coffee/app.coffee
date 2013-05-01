angularjsTutorialApp = angular.module("angularjsTutorialApp", [])
.config(["$routeProvider", ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/main.html"
    controller: "MainCtrl"
  ).otherwise redirectTo: "/"
])