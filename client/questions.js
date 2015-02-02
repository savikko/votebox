Template.Questions.helpers({
  questions: function() {
  	questions = Questions.find();
  	return questions;
  }
});

Template.Questions.events({
    'click .edit': function(event,template) {
        event.stopPropagation();
        answer = $(event.target).data("answer");
        question = $(event.target).data("question");
        answerer = Cookie.get('answerer');
        Meteor.call("answer", question, answerer, answer, function(error,result){
            if(error){
              console.log(error.reason);
            }
            else{
            	return true;
 			};
 		});
    }
});