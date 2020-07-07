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


describe('cestPasVrai', function() {
	before(function() {
		try {
			mod = require('../stubs/fx1.js');
		}
		catch (error) {
			printMessage("La fonction doit s'appeler cestPasVrai");
			success = false;
			throw error;
		}
	});

	after(function() {
		if (success) console.log('\nTECHIO> success true');
	});


	it("cestPasVrai est une fonction", function () {
		try {
			should(mod.cestPasVrai).be.a.Function();
		}
		catch (error) {
			printMessage('cestPasVrai doit être une fonction');
			success = false;
			throw error;
		}
	});

	it("cestPasVrai doit retourner faux", function () {
		try {
			assert.equal(false, mod.cestPasVrai());
		}
		catch (error) {
			printMessage('La fonction doit retourner faux (false)');
			success = false;
			throw error;
		}
	});
});