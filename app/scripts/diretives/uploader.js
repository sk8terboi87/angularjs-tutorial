(function() {

  angular.module("uploader", []).directive("fileupload", function() {
    return {
      restrict: "A",
      scope: {
        done: "&",
        progress: "&"
      },
      link: function(scope, element, attrs) {
        var optionsObj;
        optionsObj = {
          dataType: "json"
        };
        if (scope.done) {
          optionsObj.done = function() {
            return scope.$apply(function() {
              return scope.done({
                e: e,
                data: data
              });
            });
          };
        }
        if (scope.progress) {
          optionsObj.progress = function(e, data) {
            return scope.$apply(function() {
              return scope.progress({
                e: e,
                data: data
              });
            });
          };
        }
        return element.fileupload(optionsObj);
      }
    };
  });

}).call(this);
