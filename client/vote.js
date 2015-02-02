Template.Vote.helpers({
  questions: function() {
  	questions = Questions.find({show: true, "answerers.id": {$nin: [Cookie.get('answerer')]}}).fetch();
  	return questions;
  }
});

Template.Vote.events({
    'click .answer': function(event,template) {
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

Template.Vote.rendered = function() {
	if (Cookie.get('answerer')) {
	  		//console.log('already been here');
	  	}
	  	else {
	  			document.cookie = 'answerer=' + Random.id();
		}
};