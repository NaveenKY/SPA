define(function (require) {

	require(['backbone', 'app/Router'], function(Backbone, AppRouter){

		Backbone.View.prototype.close = function () {
			console.log('Closing view ' + this);
			if (this.beforeClose) {
				this.beforeClose();
			}
			this.remove();
			this.unbind();
		};

		app = new AppRouter();
		Backbone.history.start();
	});

});