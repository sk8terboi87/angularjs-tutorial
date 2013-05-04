(function() {
  'use strict';

  this.angTut.service('todoService', function(localStorageService) {
    var addFn, clearFn, getFn;
    addFn = function(data) {
      var existingValue, newData;
      existingValue = getFn();
      if (existingValue !== null) {
        newData = existingValue + ',' + data;
        localStorageService.add('someStorageKey', newData);
      } else {
        localStorageService.add('someStorageKey', data);
      }
      return data;
    };
    getFn = function(returnAsArray) {
      var storedNotes;
      storedNotes = localStorageService.get('someStorageKey');
      if ((storedNotes != null) && returnAsArray) {
        return storedNotes.split(',');
      } else {
        return storedNotes;
      }
    };
    clearFn = function() {
      return localStorageService.clearAll();
    };
    return {
      add: addFn,
      get: getFn,
      clear: clearFn
    };
  });

}).call(this);
