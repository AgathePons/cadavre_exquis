# Cadavre exquis

Le projet est consultable **[à cette adresse](http://ns3251440.ip-87-98-217.eu:3002/)**.

> En 1925, Jacques Prévert, André Breton, Frida Kahlo et une poignée d'autres figures emblématiques de l'époque s'ennuyaient et décidèrent de jouer à un jeu très simple mais hilarant (enfin, ça, ils ne le savaient pas avant d'y jouer mais ils l'ont rapidement constaté). En groupe de 3 à 5 personnes, chacun écrit une partie d'une phrase sur un papier, le plie de façon à masquer ce qu'il/elle a écrit et passe le papier à son voisin, qui écrit la suite... sans connaître le début. La première phrase générée, _le cadavre exquis boira le vin nouveau_, donna son nom au jeu.

## Projet

En s'inspirant du **cadavre exquis**, ce projet propose de piocher sujet, adjectif, verbe et complément dans une base de donnée, pour construire des phrases originales.

Un formulaire permet de rentrer une ou plusieurs valeurs. Si ces valeurs proposées par l'utilisateur sont nouvelles, elles sont ajoutées à la base de données pour compléter la collection de mots possibles.

## Les technos utilisées

Le projet tourne sous **[NodeJS](https://nodejs.dev/)** avec un serveur **[Express](https://expressjs.com/)**.
Une doc **[swagger](https://brikev.github.io/express-jsdoc-swagger-docs/#/)** est disponible sur la route `/api-docs`.
Des logs complets et utils sont fournis grâce à :

- **[debug](https://www.npmjs.com/package/debug)** pour des logs en console
- **[bunyan](https://www.npmjs.com/package/bunyan)** pour sauvegarder des fichiers de log

### Base de donnée

La base de donnée est **[PostgreSQL](https://www.postgresql.org/)**. Pour gérer les migrations de type **DDL** sur la base de données, un **[Sqitch](https://sqitch.org/about/)** est mis en place.
Le projet utilise le design pattern **data mapper**.

### Tests unitaires

Ce projet a été l'occasion d'une initiation aux **tests unitaires** grâce à l'utilisation du package **[JEST](https://jestjs.io/fr/)**.

### Validation des données

Une validation des données entrées par les utilisateurs est faite via **[joi](https://www.npmjs.com/package/joi)**.

## Pour installer le projet

Cloner le projet

```cmd
git clone git@github.com:AgathePons/cadavre_exquis.git
```

Installer les dépendances

```cmd
npm i
```

Créer le fichier `.env` en se servant du `.env.example`.

### La base de données

Créer une base de donnée (en super user)

```cmd
createdb ma_db
```

Installer **[sqitch](https://sqitch.org/download/)**.

Créer le fichier `sqitch.conf` en se servant du `sqitch.conf.example`.


Deployer la base de données

```cmd
sqitch deploy
```

Verifier la base de données

```cmd
sqitch verify
```

Revenir en arrière

```cmd
sqitch revert
```

Seeder la base de données

```cmd
psql -U <user> -d <dbname> -f data/import_data.sql
```

### Faire tourner le projet

En mode production

```cmd
npm start
```

En mode dev

```cmd
npm run dev
```

### Les tests unitaires

Jouer les tests

```cmd
npm test
```

## Note Sqitch

Initier le Sqitch

```cmd
sqitch init nom_projet --engine pg --target db:pg:ma_bdd --top-dir migrations
```
