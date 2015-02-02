Template.Answers.helpers({
  questions: function() {
  	questions = Questions.find();
  	return questions;
  },
  answercount: function(current,question) {
    return Answers.find({answer: current, question: question}).fetch().length;
  },
  totalanswers: function(question) {
    return Answers.find({question: question}).fetch().length;
  }
});


Template.Answers.rendered = function() {
  Meteor.subscribe('answers');
};
