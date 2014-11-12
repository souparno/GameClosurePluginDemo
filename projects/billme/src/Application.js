import plugins.billme.billme as billme;

exports = Class(GC.Application, function () {
    billme.add();
	this.launchUI = function () {};
});
