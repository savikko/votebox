(function(){Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

// Static pages

Router.route('/about', {name: 'about'});

Router.route('/', {name: 'vote'});

Router.route('/answers', {name: 'answers'});

Router.route('/questions', {name: 'questions'});

Router.route('/question/new', {name: 'newQuestion'});

Router.route('/question/:_id/edit', {
	name: 'editQuestion',
	data: function() { return Questions.findOne(this.params._id);}
});

})();
