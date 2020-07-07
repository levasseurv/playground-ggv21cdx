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

describe('addNombres', function() {
	before(function() {
		try {
			mod = require('../stubs/fx3.js');
		}
		catch (error) {
			printMessage("La fonction doit s'appeler addNombres");
			success = false;
			throw error;
		}
	});

	after(function() {
		if (success) console.log('\nTECHIO> success true');
	});

	it("addNombres est une fonction", function () {
		try {
			should(mod.addNombres).be.a.Function();
		}
		catch (error) {
			printMessage('addNombres doit être une fonction');
			success = false;
			throw error;
		}
	});

	it("addNombres(1,3) doit retourner 4", function () {
		try {
			assert.equal(4, mod.addNombres(1,3));
		}
		catch (error) {
			printMessage('addNombres(1,3) doit retourner 4');
			success = false;
			throw error;
		}
	});

	it('addNombres("4","5") doit retourner 9', function () {
		try {
			assert.equal(9, mod.addNombres("5","4"));
		}
		catch (error) {
			printMessage('La fonction addNombres doit transformer le texte en nombres');
			success = false;
			throw error;
		}
	});

});
