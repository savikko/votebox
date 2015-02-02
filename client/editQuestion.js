AutoForm.hooks({
  editQuestion: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('Question edited.');
      Router.go('questions');
    }, 
  }
});