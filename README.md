# Cadavre exquis

En 1925, Jacques Prévert, André Breton, Frida Kahlo et une poignée d'autres figures emblématiques de l'époque s'ennuyaient et décidèrent de jouer à un jeu très simple mais hilarant (enfin, ça, ils ne le savaient pas avant d'y jouer mais ils l'ont rapidement constaté). En groupe de 3 à 5 personnes, chacun écrit une partie d'une phrase sur un papier, le plie de façon à masquer ce qu'il/elle a écrit et passe le papier à son voisin, qui écrit la suite... sans connaître le début. La première phrase générée, _le cadavre exquis boira le vin nouveau_, donna son nom au jeu.


## Sqitch

https://sqitch.org/

https://sqitch.org/download/

Init Sqitch

```cmd
sqitch init nom_projet --engine pg --target db:pg:ma_bdd --top-dir migrations
```

Deploy sqitch

```cmd
sqitch deploy
```

Verify sqitch

```cmd
sqitch verify
```

Revert sqitch

```cmd
sqitch revert
```

## Tests unitaires

Jouer les tests :

```cmd
npm test
```
