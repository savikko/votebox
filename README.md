Votebox
============

This is Votebox built with Meteor.

Demo: http://votebox-demo.meteor.com

(Too) quickly made mobile gallup system used first (and for now only) time at Turpaboogie 2015.

* Adding questions: /questions
* Seeing answers: /answers
* Gallup /


Http auth
=========

If you want to protect your questions/answers with basic-httpauth, just create /server/basicauth.js with 
```
var basicAuth = new HttpBasicAuth("user", "secretpassword");
basicAuth.protect(['/answers']);
basicAuth.protect(['/questions']);

```

