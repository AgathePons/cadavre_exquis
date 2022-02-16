# Cadavre exquis

En 1925, Jacques Prévert, André Breton, Frida Kahlo et une poignée d'autres figures emblématiques de l'époque s'ennuyaient et décidèrent de jouer à un jeu très simple mais hilarant (enfin, ça, ils ne le savaient pas avant d'y jouer mais ils l'ont rapidement constaté). En groupe de 3 à 5 personnes, chacun écrit une partie d'une phrase sur un papier, le plie de façon à masquer ce qu'il/elle a écrit et passe le papier à son voisin, qui écrit la suite... sans connaître le début. La première phrase générée, _le cadavre exquis boira le vin nouveau_, donna son nom au jeu.

## Expressifions tout ça

En 2020, un prof amateur de calembours, de farces et de jeux en tout genre décida d'en faire un sujet d'exercice, que vous lisez en ce moment. Et en lisant cette phrase, vous réalisez ce qu'il va falloir faire. Faut-il en dire plus ?

## Les data

Tout est dans `data/parts.json`, c'est un objet qui contient 4 catégories de mots, il suffit d'en piocher un au hasard dans chaque catégorie pour créer un cadavre exquis.

Et tout ça servi par une route GET `/cadex`, tout simplement.

## Pour aller plus loin

Ça marche, c'est aléatoire, c'est beau et drôle, mais c'est pas très varié. On peut imaginer 2 possibilités d'évolution, pas forcément exclusives :

- La possibilité de décider d'un ou plusieurs morceaux et de laisser l'API décider du reste : pas de nouvelle route pour ça, le plus logique serait de passer des variables via la query string. Par exemple, la requête GET `/cadex?verb=empile` retourne un cadavre exquis pour lequel le verbe est _empile_.
- La possibilité d'étendre le vocabulaire de l'API : pas question de modifier le JSON ou de déployer une BDD, juste d'ajouter un mot à un des sous-tableaux de l'objet créé à partir du JSON. On partirait sur du POST ici, puisqu'il y a une notion d'enregistrement (temporaire, certes) de l'info passée par l'utilisateur. Par exemple, la requête POST `/cadex` à laquelle on passerait le JSON suivant `{"name": "Jérôme Cahuzac"}` retournerait un cadex (on va pas perdre une occasion d'en créer un, quand même) utilisant cette nouvelle proposition, après l'avoir ajoutée aux noms existants.