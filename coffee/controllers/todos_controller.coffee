"use strict"
@angTut.controller('TodosController', (
	$scope
	todoService
) ->
	$scope.save = ->
		todoService.add($scope.note)
		$scope.list()

	$scope.clear = ->
		todoService.clear()
		$scope.list()

	$scope.list = ->
		$scope.notes = []
		storedNotes = todoService.get(true)
		if storedNotes?
			i = 0
			while i < storedNotes.length
			  $scope.notes.push storedNotes[i]
			  i++

)