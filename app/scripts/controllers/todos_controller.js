(function() {
  "use strict";

  this.angTut.controller('TodosController', function($scope, myHttpInterceptor, todoService, Video, $q) {
    var promise;
    $scope.idiota = {
      name: ''
    };
    $scope.save = function() {
      todoService.add($scope.note);
      promise.then();
      return $scope.list();
    };
    $scope.clear = function() {
      todoService.clear();
      return $scope.list();
    };
    $scope.list = function() {
      var i, storedNotes, _results;
      $scope.notes = [];
      storedNotes = todoService.get(true);
      if (storedNotes != null) {
        i = 0;
        _results = [];
        while (i < storedNotes.length) {
          $scope.notes.push(storedNotes[i]);
          _results.push(i++);
        }
        return _results;
      }
    };
    $scope.updateRecord = function(response) {
      return $scope.idiota = response;
    };
    $scope.getData = function() {
      return $scope.updateRecord(todoService.getExternal());
    };
    return promise = $scope.getData();
  });

}).call(this);
