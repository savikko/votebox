Questions = new Mongo.Collection('questions');

Schemas.Questions = new SimpleSchema({
    question: {
        type: String,
        label: "Question",
        max: 200
    },
    show: {
      type: Boolean,
      optional:true
    },
    answers: {
      type: [Object],
      optional: true
    },
    "answers.$.answer": {
    	type: String,
    	optional:true
    },
    answerers: {
      type: [Object],
      optional:true
    },
    "answerers.$.id": {
      type: String,
      optional: true
    }
});

Questions.attachSchema(Schemas.Questions);

Questions.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
    'update': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
  });