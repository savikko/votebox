AnswerCounts.remove({}); // Clear answercounts on start 

Answers.find({}).observeChanges({
    added : function (id, fields) {
      console.log("New vote: " + id + " Question: " + fields.question + " Answer: " + fields.answer);
      AnswerCounts.upsert(
        {
          "question": fields.question, 
          "answer": fields.answer
        },
        {
          $inc: {answerCount: 1}
        }
        );
    }
});