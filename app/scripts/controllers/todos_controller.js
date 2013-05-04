(function() {
  "use strict";

  this.angTut.controller('TodosController', function($scope, todoService) {
    $scope.save = function() {
      todoService.add($scope.note);
      return $scope.list();
    };
    $scope.clear = function() {
      todoService.clear();
      return $scope.list();
    };
    return $scope.list = function() {
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
  });

}).call(this);
