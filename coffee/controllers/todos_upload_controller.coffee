"use strict"
@angTut.controller('TodosUploadController', (
	$scope, uploadService
) ->
	$scope.uploadLayer = (e, data, process) ->
		$scope.uploadReturn = uploadService.process(e, data, process)

	$scope.customData = ->
		data = {
			firstname: $scope.firstname
			lastname: $scope.lastname
		}

	$scope.uploadReturn = uploadService.initialize()
)