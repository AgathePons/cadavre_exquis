# Les tests unitaires

## package à installer

- jest : librairie de base pour les TUs en JS
- supertest : à installer si on souhaite faire des tests d'intégration (cheminement complet entre l'arrivée de la request et l'envoi de la response)

## tests de fonctionalités classiques

- on require la fonction dans le fichier de test
- on execute cette fonction pour récupérer son résultat
- on étudie ce résultat via les nombreuses méthodes de test fournies par jest (expect, toBe, toHaveProperty, toBeGreaterThan ...)

## tests de fonctions qui utilisent des paramètres fournis par javascript

- en front, ça pourrait être nos gestionnaires d'événement
- en back, c'est le cas pour les middlewares

Pour simuler ces paramètres automatiques, on utilise des mocks : objects fictif qui vont imiter les objects d'origine en fournissant notre propre version des fonctionnalités utilisées
ex : getCadex utilise response.json, notre mock de response doit également fournir une méthode json

### cas particulier, tests sur les fonctions appelées dans le code de la fonction qu'on teste

getCadex utilise response.json, si on veut testezr l'utilisation de response.json, on doit emballer cette fonction, la décorer avec une fonction fournie par jest qu'on obtient avec jets.fn et qui prendra en paramètre la déclaration de la fonction d'origine

```js
const oriFunc = x => x*x;
const testableFunc = jest.fn(x => x*x)
```

On peut ainsi contrôler :

- si la fonction a été appelée
- combien de fois elle a été appelée
- avec quels arguments elle a été appelée

## Tests d'intégration

Avec supertest, on va pouvoir simuler notre app express complète, lui envoyer des requests et vérifier la réponse obtenue après le traitement

Pour permetre à jest de clotûrer correctement le test, on a découplé notre point d'entrée :

- un module qui contient l'app express configurée mais non lancée (pas de app.listen)
- un module, le nouveau point d'entrée, qui va require ce module app et appeler le app.listen pour lancer l'appli

## Méthodologie

On fera attention à toujours vérifier que notre test PEUT échouer

Le moyen le plus simple est de le vérifier au 1er lancement, le test DOIT être tout rouge

Cette façon de faire permet de détecter rapidement des incohérences dans le code source / le code du test

On procède ensuite par itération

- un test qui échoue
- une modif du code **sans anticipation** pour faire passer le test
- le test passe (l'est tout vert);
- on écrit le test suivant et on recommence
