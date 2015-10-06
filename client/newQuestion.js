AutoForm.hooks({
  newQuestion: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess(TAPi18n.__("new_question_added"));
      Router.go('questions');
    }, 
  }
});