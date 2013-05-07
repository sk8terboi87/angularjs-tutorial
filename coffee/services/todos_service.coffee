'use strict'
@angTut.service('todoService', (
	localStorageService
	Video
	$q
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

	getExternalFm = ->
		Video.update('t')

	add: addFn
	getExternal: getExternalFm
	get: getFn
	clear: clearFn
)

@angTut.service("myHttpInterceptor", ($q, Video) ->
 	(promise) ->
    promise.then ((response) ->
      console.log 'tesasdt'
      # do something on success
      if response.headers()["content-type"] is "application/json; charset=utf-8"

        # Validate response if not ok reject
        data = Video.update('t')
        return $q.reject(response)  unless data
      response
    ), (response) ->

      # do something on error
      $q.reject response
)

@angTut.factory("Video", ($resource) ->
  $resource "http://localhost/experiment/test.php",
    Id: "@Id"
  ,
    update:
      method: "PUT"
)