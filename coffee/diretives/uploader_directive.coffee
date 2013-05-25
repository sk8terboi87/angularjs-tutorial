angular.module("uploaderComponent", [])
.directive "fileupload", ->
  restrict: "A"
  scope:
    done: "&"
    progress: "&"
    fail: "&"
    uploadurl: "="

  link: (scope, elem, attrs) ->
    uploadOptions =
    	url: scope.uploadurl
    	dataType: "json"

    if scope.done
      uploadOptions.done = (e, data) ->
        scope.$apply ->
          scope.done
            e: e
            data: data

    if scope.fail
      uploadOptions.fail = (e, data) ->
        scope.$apply ->
          scope.fail
            e: e
            data: data

    if scope.progress
      uploadOptions.progress = (e, data) ->
        scope.$apply ->
          scope.progress
            e: e
            data: data

    elem.fileupload uploadOptions