define(function (require) {
	var User = Backbone.Model.extend({
		urlRoot: "api/users",
		defaults: {
			"id": null,
			"name":  "",
			"grapes":  "",
			"country":  "USA",
			"region":  "California",
			"year":  "",
			"description":  "",
			"picture":  ""
		  }
	});
	return User;
});