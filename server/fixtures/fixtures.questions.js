if (Questions.find().count() === 0) {
  Questions.insert({
    question: 'Are you here?',
    "answers" : [
     { "answer" : "Yes" },
     { "answer" : "Sort of"},
     { "answer" : "No"}
    ]
   }
  );
};