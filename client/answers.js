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
  },
  percent: function(answer, question) {
    answerscount =  Answers.find({answer: answer, question: question}).fetch().length;
    totalanswerers = Answers.find({question: question}).fetch().length;
    return Math.round(answerscount/totalanswerers*100);
  }
});


Template.Answers.rendered = function() {
  Meteor.subscribe('answers');
};
