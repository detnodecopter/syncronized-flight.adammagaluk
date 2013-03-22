var arDrone = require('ar-drone');

var Fleet = function(services){

	var Base = arDrone.Client;

	var self = this;

	// The list of base classes for each drone
	this.services = [];

	// Create a new base class for each drone
	services.forEach(function(obj){
		self.services.push(new Base(obj));
	});

	// Create a proto type on Fleet for each proto type of the 
	// base class that loops through each instance of the base
	// class and calls the function
	Object.keys(Base.prototype).forEach(function(funcName){

		self[funcName] = function(){
			var _arguments = arguments;
			self.services.forEach(function(service){
				service[funcName].apply(service,_arguments);
			});
		};

	});
};
