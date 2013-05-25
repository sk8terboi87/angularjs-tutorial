(function() {
  'use strict';

  this.angTut.service('uploadService', function(uploadServiceUrl) {
    var initializeFn, processFn;
    initializeFn = function(e, data, process) {
      var upload;
      return upload = {
        message: '',
        uploadurl: uploadServiceUrl,
        status: false
      };
    };
    processFn = function(e, data, process) {
      var file, upload;
      upload = {};
      upload.successData = [];
      upload.status = true;
      upload.error = false;
      if (process === 'done') {
        upload.message = 'Uploaded Succesfully!!!';
        file = data.result.files[0];
        upload.successData = {
          name: file.name,
          fullUrl: file.url,
          thumbUrl: file.thumbnail_url
        };
      } else if (process === 'progress') {
        upload.message = 'Uploading....!!!';
      } else {
        upload.error = true;
        upload.message = 'Uploaded Failed!!! Booo!!! :( (Check console)';
        console.log(e, data);
      }
      return upload;
    };
    return {
      process: processFn,
      initialize: initializeFn
    };
  });

}).call(this);
