"use strict"
@angTut.controller('TodosController', (
	$scope
	myHttpInterceptor
	todoService
	Video
	$q
) ->
	$scope.idiota = {
		name: ''
	}

	$scope.save = ->
		todoService.add($scope.note)
		promise.then()
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

	$scope.updateRecord = (response) ->
		$scope.idiota = response

	$scope.getData = ->
		$scope.updateRecord(todoService.getExternal())
	# 	defer = $q.defer()
	# 	defer.resolve($scope.updateRecord(Video.update()))
	# 	return defer.promise
		# defer.promise.then ->
		# 	$scope.updateRecord(Video.update())
		# return defer.
		# defer.resolve()
		# console.log 'test'

	promise = $scope.getData()

)
