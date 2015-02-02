Answers = new Mongo.Collection('answers');

Schemas.Answers = new SimpleSchema({
    question: {
        type: SimpleSchema.RegEx.Id,
        label: "Question"
    },
    answerer: {
      type: String,
      optional: true
    },
    answer: {
    	type: String,
      optional: true
    }
});

Answers.attachSchema(Schemas.Answers);

Answers.allow({
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