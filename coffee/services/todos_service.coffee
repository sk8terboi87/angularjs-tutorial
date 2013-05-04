'use strict'
@angTut.service('todoService', (
	localStorageService
) ->
	addFn = (data) ->
		existingValue = getFn();
		if(existingValue isnt null)
			newData = existingValue + ',' + data
			localStorageService.add('someStorageKey', newData)
		else
			localStorageService.add('someStorageKey', data)
		return data

	getFn = (returnAsArray) ->
		storedNotes = localStorageService.get('someStorageKey')
		if storedNotes? and returnAsArray
		 	return storedNotes.split(',')
		else
			return storedNotes

	clearFn = ->
		localStorageService.clearAll()

	add: addFn
	get: getFn
	clear: clearFn
)