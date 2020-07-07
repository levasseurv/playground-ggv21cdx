# Création et manipulation des objets

## Créer un objet chat
- Le chat a pour nom (`nom`) "Minou"
- Le chat a deux ans (propriété `age`)
- Le chat peut ronronner (fonction `ronronne` qui retourne `"rrrrr"`)
- Le chat peut manger : fonction `mange` qui prend un paramètre `nutriments` et qui retourne `"mmm " + nutriments`

@[Créer l'objet chat décrit ci-dessus]({"stubs": ["stubs/objet1.js"], "command": "node_modules/mocha/bin/mocha test/test_objet1.js --reporter list"})
::: Solution 1
```js
const chat = {
	nom : "Minou",
	age : 2,
	ronronne : function (){
		return "rrrrr";
	},
	mange : function (nutriments){
		return "mmm " + nutriments;
	}
}
```
:::

## Créer une fonction qui incrémente la propriété "vie" du chat
- Créer une fonction prochaineVie qui prend un chat en paramètre
- La fonction incrémente le nombre de vies (propriété `vie`) du chat et modifie son âge (propriété `age`) à 0.
- La fonction retourne le chat modifié

@[Créer l'objet chat décrit ci-dessus]({"stubs": ["stubs/objet2.js"], "command": "node_modules/mocha/bin/mocha test/test_objet2.js --reporter list"})
::: Solution 1
```js
function prochaineVie(chat){
	chat.age = 0;
	chat.vie++;
	return chat;	
}
```
:::