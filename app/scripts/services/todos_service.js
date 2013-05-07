(function() {
  'use strict';

  this.angTut.service('todoService', function(localStorageService, Video, $q) {
    var addFn, clearFn, getExternalFm, getFn;
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
    getExternalFm = function() {
      return Video.update('t');
    };
    return {
      add: addFn,
      getExternal: getExternalFm,
      get: getFn,
      clear: clearFn
    };
  });

  this.angTut.service("myHttpInterceptor", function($q, Video) {
    return function(promise) {
      return promise.then((function(response) {
        var data;
        console.log('tesasdt');
        if (response.headers()["content-type"] === "application/json; charset=utf-8") {
          data = Video.update('t');
          if (!data) {
            return $q.reject(response);
          }
        }
        return response;
      }), function(response) {
        return $q.reject(response);
      });
    };
  });

  this.angTut.factory("Video", function($resource) {
    return $resource("http://localhost/experiment/test.php", {
      Id: "@Id"
    }, {
      update: {
        method: "PUT"
      }
    });
  });

}).call(this);
