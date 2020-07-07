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

describe('plusGrand"', function() {
	before(function() {
		try {
			mod = require('../stubs/tables1.js');
		}
		catch (error) {
			printMessage("La fonction doit s'appeler plusGrand");
			success = false;
			throw error;
		}
	});

	after(function() {
		if (success) console.log('\nTECHIO> success true');
	});

	it("plusGrand est une fonction", function () {
		try {
			should(mod.plusGrand).be.a.Function();
		}
		catch (error) {
			printMessage('plusGrand doit être une fonction');
			success = false;
			throw error;
		}
	});

	it("plusGrand([1,2,3,4,5]) doit retourner 5", function () {
		try {
			assert.equal(5, mod.plusGrand([1,2,3,4,5]));
		}
		catch (error) {
			if(mod.plusGrand([1,2,3,4,5]) === 4){
				printMessage('Remplacer let item in tableau par let item of tableau');
				success = false;
			}
			else {
				printMessage('lastElement([1,2,3,4,5]) doit retourner 5');
				success = false;
			}
			throw error;
		}
	});

	it('plusGrand([1]) doit retourner 1', function () {
		try {
			assert.equal(1, mod.plusGrand([1]));
		}
		catch (error) {
			printMessage('lastElement([1]) doit retourner 1');
			success = false;
			throw error;
		}
	});


});