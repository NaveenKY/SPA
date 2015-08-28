define(function (require) {

	var templatePage = require('ldsh!templates/header');

	var HeaderView = Backbone.View.extend({

		initialize: function() {
			this.template = templatePage;
		},

		render: function(eventName) {
			$(this.el).html(this.template());
			return this;
		},

		events: {
			//Add your events hhere
		}
	});
	return HeaderView;
});