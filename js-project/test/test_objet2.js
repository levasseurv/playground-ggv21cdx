//Ne pas afficher les messages d'erreur ou le rapport de tests
const output = console.log('\nTECHIO> redirect-streams --input err,out null');
const assert = require('assert');
const should = require('should');
let success = true;
let mod;
let chat;

function printMessage(message) {
	console.log('\nTECHIO> message --channel "💡 Indice(s)" ' + message);
	if (success) console.log('\nTECHIO> success false');
}

describe('prochaineVie', function () {
	before(function() {
		try {
			mod = require('../stubs/objet2.js');
		}
		catch (error) {
			printMessage("Écrire une fonction prochaineVie");
			success = false;
			throw error;
		}
	});

	beforeEach(function(){
		chat = {
			age : 2,
			nom : "Minou",
			vie : 5,
			ronronne : function (){
				return "rrrrr";
			},
			mange : function (poisson){
				return "mmm "+poisson;
			}
		};
	});

	it("prochaineVie est une fonction", function () {
		try {
			should(mod.prochaineVie).be.a.Function();
		}
		catch (error) {
			printMessage('pochaineVie doit être une fonction');
			success = false;
			throw error;
		}
	});

	it("prochaineVie retourne un chat", function () {
		try {
			should(mod.prochaineVie(chat)).be.a.Object();;
		}
		catch (error) {
			printMessage("prochaineVie doit retourner le chat passé en paramètre");
			success = false;
			throw error;
		}
	});

	it("prochaineVie incrémente le nombre de vies", function () {
		try {
			assert.equal(6, mod.prochaineVie(chat).vie);
		}
		catch (error) {
			printMessage("prochaineVie incrémente le nombre de vies");
			success = false;
			throw error;
		}
	});

	it("Âge du chat devient 0 quand nouvelle vie", function () {
		try {
			assert.equal(0, mod.prochaineVie(chat).age);
		}
		catch (error) {
			printMessage("prochaineVie modifie l'âge du chat à 0");
			success = false;
			throw error;
		}
	});

});