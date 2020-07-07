//Ne pas afficher les messages d'erreur ou le rapport de tests
var output = console.log('\nTECHIO> redirect-streams --input err,out null');
var assert = require('assert');
var should = require('should');
var success = true;
var mod;

function printMessage(message) {
	console.log('\nTECHIO> message --channel "💡 Indice(s)" ' + message);
	if (success) console.log('\nTECHIO> success false');
}

describe('Chat', function () {
	before(function() {
		try {
			mod = require('../stubs/objet1.js');
		}
		catch (error) {
			printMessage("Ne pas supprimer le code fourni");
			success = false;
			throw error;
		}
	});

	it("chat est un objet", function () {
		try {
			should(mod.chat).be.a.Object();
		}
		catch (error) {
			printMessage('chat doit être un objet');
			success = false;
			throw error;
		}
	});

	it("Chat de 2 ans", function () {
		try {
			assert.equal(2, mod.chat.age);
		}
		catch (error) {
			printMessage("L'âge du chat est de 2 ans");
			success = false;
			throw error;
		}
	});

	it("Chat s'appelle Minou", function () {
		try {
			assert.equal("Minou", mod.chat.nom);
		}
		catch (error) {
			printMessage("Le chat s'appelle Minou");
			success = false;
			throw error;
		}
	});

	it("Chat ronronne", function () {
		try {
			should(mod.chat.ronronne).be.a.Function();
		}
		catch (error) {
			printMessage("Le chat peut ronronner (fonction ronronne)");
			success = false;
			throw error;
		}
	});

	it("Quand le chat ronronne retour de rrrrr", function () {
		try {
			assert.equal("rrrrr", mod.chat.ronronne());
		}
		catch (error) {
			printMessage("Quand le chat ronronne on reçoit 'rrrrr'");
			success = false;
			throw error;
		}
	});

	it("Chat mange", function () {
		try {
			should(mod.chat.mange).be.a.Function();
		}
		catch (error) {
			printMessage("Le chat peut manger (fonction mange)");
			success = false;
			throw error;
		}
	});

	it("Chat mange poisson", function () {
		try {
			assert.equal("mmm poisson", mod.chat.mange("poisson"));
		}
		catch (error) {
			printMessage("Quand le chat mange ce qui est passé en paramètre, on reçoit `'mmm '+ valeur du paramètre`");
			success = false;
			throw error;
		}
	});

});