@angTut = angular.module("angTut", ['LocalStorageModule', 'ngResource']);

@angTut.config(["$routeProvider", ($routeProvider) ->
	$routerprovider = $routeProvider;
	$routeProvider.when("/",
		templateUrl: "views/Pages/welcome.html"
		controller: "PagesController"
	);
	$routeProvider.when("/add",
		templateUrl: "views/Todos/add.html"
		controller: "TodosController"
	);
	$routeProvider.otherwise(
		redirectTo: "/"
	);
])