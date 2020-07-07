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


describe('estPair', function() {
	before(function() {
		try {
			mod = require('../stubs/fx4.js');
		}
		catch (error) {
			printMessage("La fonction doit s'appeler estPair");
			success = false;
			throw error;
		}
	});

	after(function() {
		if (success) console.log('\nTECHIO> success true');
	});

	it("estPair est une fonction", function () {
		try {
			should(mod.estPair).be.a.Function();
		}
		catch (error) {
			printMessage('estPair doit être une fonction');
			success = false;
			throw error;
		}
	});

	it("estPair(2) doit retourner vrai", function () {
		try {
			assert.equal(true, mod.estPair(2));
		}
		catch (error) {
			printMessage('estPair(2) doit retourner vrai (true)');
			success = false;
			throw error;
		}
	});

	it('estPair(1) doit retourner faux', function () {
		try {
			assert.equal(false, mod.estPair(1));
		}
		catch (error) {
			printMessage('estPair(1) doit retourner faux (false)');
			success = false;
			throw error;
		}
	});


});