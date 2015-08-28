define(function (require) {
	var	HeaderView = require('views/HeaderView'),
		FooterView = require('views/FooterView');

	var Router = Backbone.Router.extend({

		initialize: function() {
			$('#header').html((new HeaderView()).render().el);
			$('#footer').html((new FooterView()).render().el);
		},

		routes: {
			""			: "home"
		},

		home: function() {
			//this.before();
		},

		showView: function(selector, view) {
			if (this.currentView)
				this.currentView.close();
			$(selector).html(view.render().el);
			this.currentView = view;
			return view;
		}
	});
	return Router
});