'use strict'
@angTut.service('uploadService', (uploadServiceUrl) ->
	initializeFn = (e, data, process) ->
		upload = {
			message: ''
			uploadurl: uploadServiceUrl
			status: false
		}

	processFn = (e, data, process) ->
		upload = {}
		upload.successData = []
		upload.status = true
		upload.error = false
		if(process is 'done')
			upload.message = 'Uploaded Succesfully!!!'
			file = data.result.files[0]
			upload.successData = {
				name: file.name
				fullUrl: file.url
				thumbUrl: file.thumbnail_url
			}

		else if(process is 'progress')
			upload.message = 'Uploading....!!!'
		else
			upload.error = true
			upload.message = 'Uploaded Failed!!! Booo!!! :( (Check console)'
			console.log e, data
		return upload

	process: processFn
	initialize: initializeFn
)