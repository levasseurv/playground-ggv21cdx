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

describe('lastElement', function() {
	before(function() {
		try {
			mod = require('../stubs/fx5.js');
		}
		catch (error) {
			printMessage("La fonction doit s'appeler lastElement");
			success = false;
			throw error;
		}
	});

	after(function() {
		if (success) console.log('\nTECHIO> success true');
	});

	it("lastElement est une fonction", function () {
		try {
			should(mod.lastElement).be.a.Function();
		}
		catch (error) {
			printMessage('lastElement doit être une fonction');
			success = false;
			throw error;
		}
	});

	it("lastElement([1,2,3,4,5]) doit retourner 5", function () {
		try {
			assert.equal(5, mod.lastElement([1,2,3,4,5]));
		}
		catch (error) {
			printMessage('lastElement([1,2,3,4,5]) doit retourner 5');
			success = false;
			throw error;
		}
	});

	it('lastElement([1]) doit retourner 1', function () {
		try {
			assert.equal(1, mod.lastElement([1]));
		}
		catch (error) {
			printMessage('lastElement([1]) doit retourner 1');
			success = false;
			throw error;
		}
	});


});