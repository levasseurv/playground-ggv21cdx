# Utilisation des fonctions et des opérateurs
 
## Créer une fonction cestPasVrai
- La fonction cestPasVrai n'a aucun paramètre
- Elle retourne toujours faux (booléen);

@[Créer la fonction cestPasVrai décrite ci-dessus]({"stubs": ["stubs/fx1.js"], "command": "node_modules/mocha/bin/mocha test/test_fx1.js --reporter list"})
::: Solution
```js
function cestPasVrai(){
  return false;
}
```
:::

## Créer une fonction bonjour 
- La fonction bonjour a un paramètre
- Elle retourne une chaîne de caractères composé de Bonjour suivi du prénom passé en paramètre
- ex. bonjour("Jean") retourne "Bonjour Jean".

*Attention aux espaces et à la ponctuation dans la valeur retournée*

@[Créer la fonction bonjour décrite ci-dessus]({"stubs": ["stubs/fx2.js"], "command": "node_modules/mocha/bin/mocha test/test_fx2.js --reporter list"})

::: Solution
```js
function bonjour(prenom){
  return "Bonjour "+prenom;
}
```
:::

## Créer une fonction addNombres
- La fonction a deux paramètres
- La fonction retourne l'addition des deux paramètres
- La fonction transforme les chaînes de caractères en nombres (voir parseInt)

@[Créer la fonction addNombres décrite ci-dessus]({"stubs": ["stubs/fx3.js"], "command": "node_modules/mocha/bin/mocha test/test_fx3.js --reporter list"})

::: Solution
```js
function addNombres(nombre1, nombre2){
  return parseInt(nombre1, 10)+ parseInt(nombre2, 10);
}
```
:::

## Créer une fonction estPair
- La fonction prend comme seul argument un nombre
- La fonction retourne vrai(true) si le nombre est pair, false sinon

@[Créer la fonction estPair décrite ci-dessus]({"stubs": ["stubs/fx4.js"], "command": "node_modules/mocha/bin/mocha test/test_fx4.js --reporter list"})
::: Solution
```js
function estPair(nombre){
  return nombre%2===0;
}
```
:::

## Quiz
?[Pour vérifier si var1 ou var2 est vraie :](single)
-[] var1 OR var2
-[] var1 & var2 
-[x] var1 || var2
-[] var1 | var2

?[Je veux savoir si le nombre contenu dans var1 est égal à celui contenu dans var2: ](single)
-[] var1 | var2
-[] var1 == var2
-[x] var1 === var2
::: Explication
 - "4" == 4 retourne vrai
 - "4" === 4 retourne faux
 - Comme je veux savoir si le nombre est égal : ===
:::

?[!"" && !4 retourne ](single)
-[] vrai
-[x] faux
::: Explication
 - "" est évalué comme faux lorsqu'on le transforme en booléen
 - !"" est évalué comme vrai (non faux)
 - 4 est évalué comme vrai lorsqu'on le transforme en booléen
 - !4 est évalué comme faux (non vrai)
 - vrai ET faux retourne faux (&&)
:::