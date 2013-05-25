(function() {
  "use strict";

  this.angTut.controller('TodosUploadController', function($scope, uploadService) {
    $scope.uploadLayer = function(e, data, process) {
      return $scope.uploadReturn = uploadService.process(e, data, process);
    };
    return $scope.uploadReturn = uploadService.initialize();
  });

}).call(this);
