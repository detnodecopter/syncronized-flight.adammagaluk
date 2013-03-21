var util = require('util');
var arDrone = require('ar-drone');

var TestClass = function(obj){
	this.name = obj.name;
};
TestClass.prototype.speak = function(x) {
	console.log(this.name + " sais " + x);
};
TestClass.prototype.speak2 = function(x) {
	console.log(this.name + " sais " + x);
};

var a = new TestClass({name : "adam"});
var b = new TestClass({name : "bpb"});

var Fleet = function(services){
	var Base = arDrone.Client;

	var self = this;
	this.services = [];

	services.forEach(function(obj){
		self.services.push(new Base(obj));
	});

	Object.keys(Base.prototype).forEach(function(funcName){
		self[funcName] = function(){
			var _arguments = arguments;
			self.services.forEach(function(service){
				service[funcName].apply(service,_arguments);
			});
		};
	});
};
