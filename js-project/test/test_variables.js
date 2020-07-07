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

describe('Déclaration des variables', function () {
	before(function() {
		try {
			mod = require('../stubs/variables.js');
		}
		catch (error) {
			printMessage('Il faut déclarer toutes les variables');
			success = false;
			throw error;
		}
	});

	after(function() {
		if (success) console.log('\nTECHIO> success true');
	});

	it("Nombre contient 255", function () {
		try {
			assert.equal(255, mod.nombre);
		}
		catch (error) {
			printMessage('La variable nombre doit contenir 255');
			success = false;
			throw error;
		}
	});

	it("Nombre est un nombre", function () {
		try {
			should(mod.nombre).be.a.Number();
		}
		catch (error) {
			printMessage('La variable nombre doit contenir un nombre');
			success = false;
			throw error;
		}

	});

	it("Chaine contient «allo»", function () {
		try {
			assert.equal("allo", mod.chaine);
		}
		catch (error) {
			printMessage('La variable  chaine doit contenir "allo"');
			success = false;
			throw error;
		}
	});

	it("Chaine contient «allo»", function () {
		try {
			should(mod.chaine).be.a.String();
		}
		catch (error) {
			printMessage('La variable chaine doit contenir un chaîne de caractères');
			success = false;
			throw error;
		}
	});

	it("Tableau contient 1,2,3,4,5", function () {
		try {
			assert.deepEqual([1, 2, 3, 4, 5], mod.tableau);
		}
		catch (error) {
			printMessage('La variable tableau doit contenir les chiffres de 1 à 5 (dans un tableau)');
			success = false;
			throw error;
		}
	});

	it("Tableau est un tableau", function () {
		try {
			should(mod.tableau).be.a.Array();
		}
		catch (error) {
			printMessage('La variable tableau doit être un tableau');
			success = false;
			throw error;
		}
	});
});