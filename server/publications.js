Meteor.publish('questions', function() {
	return Questions.find();
});

Meteor.publish('answerCounts', function() {
  return AnswerCounts.find();
});
