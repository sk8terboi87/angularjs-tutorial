(function() {
  "use strict";

  this.angTut.controller('TodosUploadController', function($scope, uploadService) {
    $scope.uploadLayer = function(e, data, process) {
      return $scope.uploadReturn = uploadService.process(e, data, process);
    };
    $scope.customData = function() {
      var data;
      return data = {
        firstname: $scope.firstname,
        lastname: $scope.lastname
      };
    };
    return $scope.uploadReturn = uploadService.initialize();
  });

}).call(this);
