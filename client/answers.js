Template.Answers.helpers({
  questions: function() {
  	questions = Questions.find();
  	return questions;
  },
  answercount: function(answer,question) {
    return AnswerCounts.findOne({answer: answer, question: question}).answerCount;
  },
  totalanswers: function(question) {
    var totalAnswerers = 0;
    AnswerCounts.find({question: question}).map(function(doc) {
      totalAnswerers += doc.answerCount;
    });
    return totalAnswerers;
  },
  percent: function(answer, question) {
    answersCount =  AnswerCounts.findOne({answer: answer, question: question}).answerCount;
    var totalAnswerers = 0;
    AnswerCounts.find({question: question}).map(function(doc) {
      totalAnswerers += doc.answerCount;
    });
    return Math.round(answersCount/totalAnswerers*100);
  }
});


Template.Answers.rendered = function() {
  Meteor.subscribe('answerCounts');
};
