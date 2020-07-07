# Manipulation des tableaux

## Créer une fonction qui retourne le dernier élément d'un tableau : lastElement
- La fonction prend comme seul argument un tableau quelconque
- Elle retourne le dernier élément du tableau passé en paramètre

@[Créer la fonction lastElement décrite ci-dessus]({"stubs": ["stubs/fx5.js"], "command": "node_modules/mocha/bin/mocha test/test_fx5.js --reporter list"})
::: Solution 1
```js
function lastElement(tableau){
  return tableau.pop();
}
```
:::
::: Solution 2
```js
function lastElement(tableau){
  return tableau[tableau.length-1];
}
```
:::

## Créer une fonction qui retourne le plus grand élément d'un tableau : plusGrand
- La fonction prend comme seul argument un tableau contenant des nombres
- Elle retourne l'élément le plus grand du tableau passé en paramètre

@[Créer la fonction plusGrand décrite ci-dessus]({"stubs": ["stubs/tables1.js"], "command": "node_modules/mocha/bin/mocha test/test_tables1.js --reporter list"})
::: Solution 1
```js
function plusGrand(tableau){
  let plusGrand = tableau[0];
  for(let item of tableau){
    plusGrand = item > plusGrand ? item : plusGrand;
  }
  return plusGrand;
}
```
:::
::: Solution 2
```js
function plusGrand(tableau){
  let plusGrand = tableau[0];
  for(let item of tableau){
    if(item>plusGrand) {
      plusGrand = item;
    }
  }
  return plusGrand;
}
```
:::
