AnswerCounts = new Mongo.Collection('answercounts');

Schemas.AnswerCounts = new SimpleSchema({
    question: {
        type: SimpleSchema.RegEx.Id,
        label: "Question"
    },
    answer: {
      type: String,
      optional: false
    },
    answerCount: {
      type: Number,
      optional: true
    }
});

AnswerCounts.attachSchema(Schemas.AnswerCounts);

AnswerCounts.allow({
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