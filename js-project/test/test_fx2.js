//Ne pas afficher les messages d'erreur ou le rapport de tests
var output = console.log('\nTECHIO> redirect-streams --input out,err null');
var assert = require('assert');
var should = require('should');
var success = true;
var mod;

function printMessage(message) {
	console.log('\nTECHIO> message --channel "💡 Indice(s)" ' + message);
	if (success) console.log('\nTECHIO> success false');
}

describe('bonjour', function() {
	before(function() {
		try {
			mod = require('../stubs/fx2.js');
		}
		catch (error) {
			printMessage("La fonction doit s'appeler bonjour");
			success = false;
			throw error;
		}
	});

	after(function() {
		if (success) console.log('\nTECHIO> success true');
	});

	it("bonjour est une fonction", function () {
		try {
			should(mod.bonjour).be.a.Function();
		}
		catch (error) {
			printMessage('bonjour doit être une fonction');
			success = false;
			throw error;
		}
	});

	it("bonjour doit retourner Bonjour Jean", function () {
		try {
			assert.equal("Bonjour Jean", mod.bonjour("Jean"));
		}
		catch (error) {
			printMessage('Si le prénom est Jean, la fonction doit retourner "Bonjour Jean"');
			success = false;
			throw error;
		}
	});

});