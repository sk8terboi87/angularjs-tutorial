(function() {

  angular.module("uploaderComponent", []).directive("fileupload", function() {
    return {
      restrict: "A",
      scope: {
        done: "&",
        progress: "&",
        fail: "&",
        uploadurl: "="
      },
      link: function(scope, elem, attrs) {
        var uploadOptions;
        uploadOptions = {
          url: scope.uploadurl,
          dataType: "json"
        };
        if (scope.done) {
          uploadOptions.done = function(e, data) {
            return scope.$apply(function() {
              return scope.done({
                e: e,
                data: data
              });
            });
          };
        }
        if (scope.fail) {
          uploadOptions.fail = function(e, data) {
            return scope.$apply(function() {
              return scope.fail({
                e: e,
                data: data
              });
            });
          };
        }
        if (scope.progress) {
          uploadOptions.progress = function(e, data) {
            return scope.$apply(function() {
              return scope.progress({
                e: e,
                data: data
              });
            });
          };
        }
        return elem.fileupload(uploadOptions);
      }
    };
  });

}).call(this);
