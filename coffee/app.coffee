@angTut = angular.module("angTut", ['LocalStorageModule', 'ngResource', 'uploaderComponent']);

@angTut.constant('uploadServiceUrl', 'http://192.168.0.2/api/index.php')

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
	$routeProvider.when("/upload",
		templateUrl: "views/Todos/upload.html"
		controller: "TodosUploadController"
	);
	$routeProvider.otherwise(
		redirectTo: "/"
	);
])