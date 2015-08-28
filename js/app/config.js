require.config({
	baseUrl:"./js",
	waitSeconds: 60,
	paths:{
		"text"					:"../lib/require/text",
		"ldsh"					:"../lib/require/lodash-loader",
		"lodash"				:"../lib/require/lodash.min",
		"jquery"				:"../lib/jquery/jquery-2.1.4.min",
		"jqueryui"				:"../lib/jquery/jquery-ui.min",
		"underscore"			:"../lib/backbone/underscore-min",
		"backbone"				:"../lib/backbone/backbone-min",
		"bootstrap"				:"../lib/bootstrap/bootstrap.min"
	},
	// Sets the configuration for your third party scripts that are not AMD compatible
	shim:{
		"backbone":{
			"deps":["underscore", "jquery"],
			"exports":"Backbone"
		},
		"bootstrap":["jquery"],
		"jqueryui":["jquery"],
		"select2":["jquery"]
		//"validation":["backbone"]
	},
	deps:['app/Main']
});
