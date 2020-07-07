# Déclaration des variables

Créer les variables ci-dessous : 
- Une variable <code>nombre</code> qui contient le nombre 255
- Une variable <code>chaine</code> qui contient le mot «allo»
- Une variable <code>tableau</code> qui contient un tableau contenant les chiffres 1 à 5

@[Créer les variables demandées ci-dessus]({"stubs": ["stubs/variables.js"], "command": "node_modules/mocha/bin/mocha test/test_variables.js --reporter list"})

::: Réponse
```js
let nombre = 255;
let chaine = "allo";
let tableau = [1,2,3,4,5];
```
:::

# Quiz
?[La portée des variables créées avec le mot clé «let» est:](single)
-[] globale
-[x] le bloc courant
-[] la fonction courante

?[Si on respecte la portée de la variable, on peut utiliser une variable créée avec le mot clé «var» avant sa déclaration : ](single)
-[x] vrai
-[] faux

?[Si on respecte la portée de la variable, on peut utiliser une variable créée avec le mot clé «let» avant sa déclaration : ](single)
-[] vrai
-[x] faux