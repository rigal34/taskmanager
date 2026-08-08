# TaskManager

Application de gestion de tâches construite en React, dans le cadre d'un
parcours de formation. Projet destiné à être publié en ligne et présenté
à des recruteurs.

## Fonctionnalités visées

- Liste des tâches avec un statut (À faire / Terminée)
- Titre et description pour chaque tâche
- Créer, modifier, terminer et supprimer une tâche
- Page dédiée à la modification d'une tâche
- Connexion et inscription
- Enregistrement des tâches via une API

## Stack technique

| Élément | Choix | Raison |
|---|---|---|
| Outil de build | Vite | Serveur de développement rapide, rechargement à chaud |
| Bibliothèque | React | Cœur du projet |
| Langage | JavaScript | Pas de TypeScript, pour rester sur l'essentiel |
| Linter | ESLint | Standard du métier, préféré à Oxlint |
| React Compiler | Non activé | Aucun gain à cette échelle |
| CSS | Tailwind via CDN | Balise script dans `index.html` |
| Formatage | Prettier | Format à l'enregistrement |

## Installation

    npm install
    npm run dev

Serveur de développement : http://localhost:5173/

Autres commandes définies dans `package.json` : `build`, `preview`, `lint`.

## Création du projet

    npm create vite@latest taskmanager

Réponses : React, JavaScript, ESLint.
L'option « Install with npm and start now » a été refusée volontairement,
pour lancer `npm install` et `npm run dev` à la main.

Emplacement : `C:\taskmanager`

## Structure

    taskmanager/
    ├── public/                  fichiers servis tels quels
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src/
    │   ├── assets/              images importées par le code
    │   │   ├── hero.png
    │   │   └── vite.svg
    │   ├── components/
    │   │   ├── Header.jsx       barre de navigation bleue
    │   │   └── Footer.jsx       pied de page bleu
    │   ├── App.jsx              assemble la page
    │   ├── index.css            styles globaux (vide)
    │   └── main.jsx             point d'entrée React
    ├── index.html               unique page HTML
    ├── eslint.config.js
    ├── vite.config.js
    ├── package.json
    └── .gitignore

## Chaîne d'affichage

1. Le navigateur charge `index.html`
2. Il y trouve une `<div id="root">` vide
3. Il exécute `src/main.jsx`
4. `main.jsx` récupère la div et y plante `<App />`
5. `App` appelle les composants, qui construisent la page

Le fichier source contient une div vide ; la page vivante la contient
remplie — vérifiable en comparant Ctrl+U et F12 → Elements.

## Conventions du projet

- Un composant = un fichier, dans `src/components/`
- `className` et non `class` — `class` est réservé en JavaScript
- Styles en ligne sous forme d'objet : `style={{ margin: "auto" }}`
- Propriétés CSS en casse chameau : `maxWidth`, pas `max-width`
- Balises solitaires fermées : `<img />`, `<br />`
- Console du navigateur maintenue vide de tout avertissement
- Images importées par le code → `src/assets/`
  Fichiers à adresse fixe → `public/`
- Le style passe par les classes Tailwind, pas par des fichiers CSS

## Mise en page

`App.jsx` enveloppe le tout dans une div `flex flex-col min-h-screen`.
Combinée au `flex-1` du `<main>` et au `mt-auto` du footer, elle produit
un pied de page collé en bas de l'écran même quand la page est peu remplie.

## Modifications apportées au modèle de départ

- `src/App.css` supprimé (plus aucun import)
- `src/assets/react.svg` supprimé (logo de la démo Vite)
- `src/index.css` vidé — ses styles par défaut (fond sombre, corps centré)
  contrariaient la mise en page
- `Header.css` et `Footer.css` supprimés, ainsi que leurs imports :
  Tailwind rend ces fichiers inutiles
- `index.html` : langue passée en `fr`, titre passé à TaskManager,
  balise script Tailwind ajoutée dans le `<head>`

## État d'avancement

Fait :
- Projet créé et configuré
- Composant Header (barre de navigation)
- Composant Footer
- `App.jsx` assemble Header, `<main>` et Footer
- Mise en page à pied de page collant

À faire :
- Contenu de la page d'accueil
- Liste des tâches et composant Tâche
- Formulaire de création
- Page de modification
- Navigation entre les pages
- Connexion et inscription
- Branchement de l'API
- Installation propre de Tailwind avant la mise en ligne

## Points à vérifier

- `index.html` réclame le favicon en `/vite.svg`. Vérifier que ce fichier
  est bien présent dans `public/`, sinon utiliser `/favicon.svg`.
- Ajouter `.history/` au `.gitignore` (dossier créé par une extension VS Code).
- Les liens du Header pointent vers `index.html` et `tasks.html`.
  Ils rechargent la page entière et seront remplacés par des liens de
  routeur quand la navigation sera en place.

  # TaskManager

Application de gestion de tâches construite en React, dans le cadre d'un
parcours de formation. Projet destiné à être publié en ligne.

## Fonctionnalités visées

- Liste des tâches avec un statut (À faire / Terminée)
- Titre et description pour chaque tâche
- Créer, modifier, terminer et supprimer une tâche
- Page dédiée à la modification d'une tâche
- Connexion et inscription
- Enregistrement des tâches via une API

## Stack technique

| Élément | Choix | Raison |
|---|---|---|
| Outil de build | Vite | Serveur de développement rapide, rechargement à chaud |
| Bibliothèque | React | Cœur du projet |
| Langage | JavaScript | Pas de TypeScript, pour rester sur l'essentiel |
| Navigation | react-router-dom | Navigation entre pages sans rechargement |
| Linter | ESLint | Standard du métier, préféré à Oxlint |
| CSS | Tailwind via CDN | Balise script dans `index.html` |
| Formatage | Prettier | Format à l'enregistrement |

## Installation

    npm install
    npm run dev

Serveur de développement : http://localhost:5173/

Autres commandes définies dans `package.json` : `build`, `preview`, `lint`.

## Création du projet

    npm create vite@latest taskmanager

Réponses : React, JavaScript, ESLint.
L'option « Install with npm and start now » a été refusée volontairement,
pour lancer `npm install` et `npm run dev` à la main.

Emplacement : `C:\taskmanager`

## Structure

    taskmanager/
    ├── public/                  fichiers servis tels quels
    │   ├── favicon.svg
    │   ├── icons.svg
    │   └── accueil.svg          illustration de la page d'accueil
    ├── src/
    │   ├── assets/              images importées par le code
    │   ├── components/          morceaux réutilisés sur toutes les pages
    │   │   ├── Header.jsx       barre de navigation bleue
    │   │   └── Footer.jsx       pied de page bleu
    │   ├── pages/               un fichier par écran
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Tasks.jsx
    │   │   ├── CreateTask.jsx
    │   │   └── EditTask.jsx
    │   ├── App.jsx              structure de la page et table des routes
    │   ├── index.css            styles globaux
    │   └── main.jsx             point d'entrée, enveloppes globales
    ├── index.html               unique page HTML
    ├── eslint.config.js
    ├── vite.config.js
    ├── package.json
    └── .gitignore

Distinction adoptée : `components/` contient ce qui apparaît sur
plusieurs écrans, `pages/` contient les écrans eux-mêmes.

## Chaîne d'affichage

1. Le navigateur charge `index.html`
2. Il y trouve une `<div id="root">` vide
3. Il exécute `src/main.jsx`
4. `main.jsx` récupère la div et y plante `<App />`
5. `App` construit la page et laisse le routeur remplir le centre

Le fichier source contient une div vide ; la page vivante la contient
remplie — vérifiable en comparant Ctrl+U et F12 → Elements.

## Navigation

### Le principe

L'application ne contient qu'une seule page HTML. Il n'y a pas de
`tasks.html` ni de `login.html` : c'est JavaScript qui remplace le
contenu à l'écran, sans jamais recharger la page.

### Les trois pièces

| Pièce | Rôle | Où |
|---|---|---|
| `BrowserRouter` | Surveille l'adresse du navigateur | `main.jsx`, autour de `<App />` |
| `Routes` | Compare l'adresse à chaque route et choisit la gagnante | `App.jsx`, dans le `<main>` |
| `Route` | Une adresse et le composant correspondant | à l'intérieur de `Routes` |

`BrowserRouter` est placé dans `main.jsx` afin que l'application entière
se trouve à l'intérieur du routeur. Placé dans `App.jsx`, il laisserait
`App` en dehors, qui ne pourrait alors pas se servir des outils de
navigation.

### Lecture d'une route

    <Route path="/tasks" element={<Tasks />} />

Se lit : « quand l'adresse est /tasks, affiche le composant Tasks ».

- `path` pose la question, `element` est la réponse
- `path` ne s'affiche jamais à l'écran, c'est une consigne pour React
- `element` prend des accolades car `<Tasks />` est une valeur JavaScript

Une seule route s'affiche à la fois. Les autres n'existent pas à l'écran.

### Où le contenu apparaît

`<Routes>` est placé à l'intérieur du `<main>`. Par conséquent, lors d'un
changement de page :

- le Header ne bouge pas
- le Footer ne bouge pas
- seul le contenu du `<main>` est remplacé

### Table des routes

| Adresse | Composant | Écran |
|---|---|---|
| `/` | Home | Accueil |
| `/login` | Login | Connexion |
| `/register` | Register | Inscription |
| `/tasks` | Tasks | Liste des tâches |
| `/create` | CreateTask | Création d'une tâche |
| `/edit` | EditTask | Modification d'une tâche |

### Piège rencontré

Une route déclarée `/task` alors que la navigation visait `/tasks` :
la page restait vide, sans aucune erreur ni message dans la console.
Quand aucune route ne correspond, `Routes` n'affiche rien du tout.

Remède prévu : ajouter une route attrape-tout en dernière position,
qui affichera « Page introuvable » au lieu d'un écran vide.

    <Route path="*" element={<p>Page introuvable</p>} />

## Conventions du projet

- Un composant = un fichier
- `className` et non `class` — `class` est réservé en JavaScript
- Styles en ligne sous forme d'objet : `style={{ margin: "auto" }}`
- Propriétés CSS en casse chameau : `maxWidth`, pas `max-width`
- Balises solitaires fermées : `<img />`, `<Route />`
- `margin: auto` ne centre une image que si elle passe en `display: block`
- Console du navigateur maintenue vide de tout avertissement
- Le style passe par les classes Tailwind

### Lien ou bouton

- **`Link`** quand l'élément change seulement d'adresse
- **`button`** quand l'élément déclenche une action

La déconnexion est donc un bouton : elle efface la session avant de
rediriger. Un lecteur d'écran annonce « lien » ou « bouton » selon le
cas, et cette distinction guide l'utilisateur.

### Espacement

`gap` pose un espace minimum entre les enfants directs d'un conteneur
flex. Chaque conteneur gère l'espacement de ses propres enfants :
`gap-4` sur la carte sépare le texte des boutons, `gap-2` sur le groupe
de boutons les sépare entre eux.

## Mise en page

`App.jsx` enveloppe le tout dans une div `flex flex-col min-h-screen`.
Combinée au `flex-1` du `<main>` et au `mt-auto` du footer, elle produit
un pied de page collé en bas de l'écran même quand la page est peu remplie.

## Modifications apportées au modèle de départ

- `src/App.css` supprimé, `src/assets/react.svg` supprimé
- `src/index.css` vidé — ses styles par défaut contrariaient la mise en page
- `Header.css` et `Footer.css` supprimés : Tailwind les rend inutiles
- `index.html` : langue en `fr`, titre TaskManager, script Tailwind ajouté
- Les liens `<a href="tasks.html">` du Header remplacés par des `<Link to>`

## État d'avancement

Fait :
- Projet créé, configuré, versionné et publié sur GitHub
- Composants Header et Footer
- Illustration de la page d'accueil
- Navigation complète : six pages et six routes
- Header converti en liens de routeur
- Première carte de tâche, écrite en dur

À faire :
- Remplacer la carte écrite en dur par une liste construite avec `map`
- Formulaire de création d'une tâche
- Modification et suppression d'une tâche
- Route attrape-tout pour les adresses inconnues
- Connexion et inscription
- Branchement de l'API
- Installation propre de Tailwind avant la mise en ligne

# TaskManager

Application de gestion de tâches construite en React.

## Fonctionnalités visées

- Liste des tâches avec un statut (À faire / Terminée)
- Titre et description pour chaque tâche
- Créer, modifier, terminer et supprimer une tâche
- Page dédiée à la modification d'une tâche
- Connexion et inscription
- Enregistrement des tâches via une API

## Stack technique

| Élément | Choix | Raison |
|---|---|---|
| Outil de build | Vite | Serveur de développement rapide, rechargement à chaud |
| Bibliothèque | React | Cœur du projet |
| Langage | JavaScript | Pas de TypeScript, pour rester sur l'essentiel |
| Navigation | react-router-dom | Navigation entre pages sans rechargement |
| Linter | ESLint | Standard du métier, préféré à Oxlint |
| CSS | Tailwind via CDN | Balise script dans `index.html` |
| Formatage | Prettier | Format à l'enregistrement |

## Installation

    npm install
    npm run dev

Ouvrir l'adresse annoncée par le terminal — pas 5173 de mémoire, elle
change si un autre serveur occupe déjà le port.

## Structure

    taskmanager/
    ├── public/                  fichiers servis tels quels
    │   ├── favicon.svg
    │   ├── icons.svg
    │   └── accueil.svg          illustration de la page d'accueil
    ├── src/
    │   ├── assets/              images importées par le code
    │   ├── components/          morceaux réutilisés sur toutes les pages
    │   │   ├── Header.jsx
    │   │   └── Footer.jsx
    │   ├── pages/               un fichier par écran
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Tasks.jsx
    │   │   ├── CreateTask.jsx
    │   │   └── EditTask.jsx
    │   ├── exos/                brouillons d'entraînement (ignoré par git)
    │   ├── App.jsx              structure de la page et table des routes
    │   ├── index.css            styles globaux
    │   └── main.jsx             point d'entrée, enveloppes globales
    ├── index.html               unique page HTML
    └── .gitignore

`components/` contient ce qui apparaît sur plusieurs écrans,
`pages/` contient les écrans eux-mêmes.

## Chaîne d'affichage

1. Le navigateur charge `index.html`
2. Il y trouve une `<div id="root">` vide
3. Il exécute `src/main.jsx`, qui importe `index.css` et enveloppe
   `<App />` dans `<BrowserRouter>`
4. `App` construit la page et laisse le routeur remplir le centre

## Navigation

### Les trois pièces

| Pièce | Rôle | Où |
|---|---|---|
| `BrowserRouter` | Surveille l'adresse du navigateur | `main.jsx` |
| `Routes` | Choisit la route qui correspond | `App.jsx`, dans le `<main>` |
| `Route` | Une adresse et son composant | dans `Routes` |

`BrowserRouter` est dans `main.jsx` pour que l'application entière soit
à l'intérieur du routeur.

### Table des routes

| Adresse | Composant |
|---|---|
| `/` | Home |
| `/login` | Login |
| `/register` | Register |
| `/tasks` | Tasks |
| `/create` | CreateTask |
| `/edit` | EditTask |
| `*` | message « Page introuvable » |

La route `*` répond à toute adresse inconnue. Elle est placée **en
dernier**, car `Routes` retient la première qui correspond.

Sans elle, une adresse erronée n'affiche rien du tout — ni erreur,
ni message. C'est le piège du routeur.

### Liens

`Route` doit vivre dans `Routes`. `Link` fonctionne partout dans
l'application. Le Header dit « voici les portes », les Routes disent
« voici ce qu'il y a derrière chaque porte ».

`Link` quand l'élément change d'adresse, `button` quand il déclenche
une action — la déconnexion est donc un bouton.

## Formulaires

### Le champ contrôlé

    const [email, setEmail] = useState("");

    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

C'est un aller-retour : l'état commande le champ par `value`, le champ
commande l'état par `onChange`. Sans le retour, React verrouille le
champ en lecture seule.

`e.target` est l'élément qui a déclenché l'événement, `.value` son
contenu actuel.

### L'envoi

    const handleSubmit = (e) => {
      e.preventDefault();
      ...
    };

`preventDefault` est indispensable : sans elle, le comportement natif
du formulaire recharge la page et remet toute l'application à zéro.

`onSubmit` est posé sur le `<form>` et non sur le bouton, pour que la
touche Entrée fonctionne aussi.

### Les attributs `type`

Deux attributs sans rapport, même nom :

- sur un `<input>` : la sorte de donnée attendue (`email`, `password`)
- sur un `<button>` : ce qu'il fait dans le formulaire (`submit`, `button`)

`type="password"` est indispensable, il masque les caractères.
Les autres sont écrits explicitement par discipline, pour ne pas
oublier `type="button"` le jour où un second bouton apparaîtra.

## Affichage conditionnel

| Forme | Où | Effet |
|---|---|---|
| `if (…) { }` | dans une fonction | empêche une action |
| `{a ? b : c}` | dans le JSX | affiche ceci ou cela |
| `{a && b}` | dans le JSX | affiche ceci ou rien |

Exemple utilisé dans Login :

    {error && <p className="error-form">Identifiants invalides</p>}

## Mise en page

`App.jsx` enveloppe le tout dans `flex flex-col min-h-screen`.
Avec le `flex-1` du `<main>` et le `mt-auto` du footer, le pied de page
reste collé en bas même quand la page est peu remplie.

### Piège rencontré

Le `<main>` était déclaré `flex-1 max-w-4xl mx-auto p-4` et se rétractait
sur son contenu : 820 px sur l'accueil, 266 px sur l'inscription, avec
les mêmes classes.

Cause : sur un élément flex, `mx-auto` annule l'étirement
(`align-items: stretch`). Sans largeur explicite, l'élément se replie
sur `fit-content`.

Correctif : ajouter `w-full`. Pour obtenir un bloc **centré et à sa
largeur maximale**, il faut les trois classes ensemble :

    w-full max-w-4xl mx-auto

## Conventions du projet

- Un composant = un fichier
- `className` et non `class`
- Styles en ligne sous forme d'objet : `style={{ margin: "auto" }}`
- Propriétés CSS en casse chameau : `maxWidth`
- Balises solitaires fermées : `<img />`, `<Route />`
- `margin: auto` ne centre que si l'élément est en `display: block` :
  une `<img>` et un `<input>` sont en ligne par défaut
- `gap` sur un conteneur flex espace ses enfants directs
- Console du navigateur maintenue vide de tout avertissement

## Styles

`index.css` est la feuille globale, importée une seule fois dans
`main.jsx`. Elle contient les règles de formulaire et la classe
`.error-form`.

Attention : sur les champs, les classes Tailwind l'emportent sur les
règles `form input` — une classe prime sur un sélecteur d'élément.

## Modifications apportées au modèle de départ

- `App.css`, `react.svg`, `Header.css` et `Footer.css` supprimés
- `index.css` vidé puis rempli des règles du cours
- `index.html` : langue `fr`, titre TaskManager, script Tailwind
- Les `<a href="tasks.html">` du Header remplacés par des `<Link to>`

## État d'avancement

Fait :
- Projet créé, configuré, versionné et publié sur GitHub
- Header, Footer, illustration d'accueil
- Navigation complète : six routes plus l'attrape-tout
- Formulaire d'inscription, champs contrôlés
- Formulaire de connexion, avec message d'erreur conditionnel
- Première carte de tâche, écrite en dur

À faire :
- Remplacer la carte en dur par une liste construite avec `map`
- Formulaire de création d'une tâche
- Modification et suppression
- Vérification des identifiants, branchement de `setError`
- Branchement de l'API
- Installation propre de Tailwind avant la mise en ligne

## Refonte prévue après le cours

Remplacer les règles de `index.css` par des composants réutilisables,
à commencer par un `<Champ />` portant les classes une seule fois.
Ces règles sont déjà largement écrasées par Tailwind : le changement
sera à faible risque.

# TaskManager

## Fonctionnalités visées

- Liste des tâches avec un statut (À faire / Terminée)
- Titre et description pour chaque tâche
- Créer, modifier, terminer et supprimer une tâche
- Connexion et inscription
- Enregistrement des tâches via une API

## Stack technique

| Élément | Choix | Raison |
|---|---|---|
| Outil de build | Vite | Serveur de développement rapide |
| Bibliothèque | React | Cœur du projet |
| Langage | JavaScript | Pas de TypeScript, pour rester sur l'essentiel |
| Navigation | react-router-dom | Pages sans rechargement |
| Requêtes HTTP | Axios | Erreurs HTTP levées, intercepteurs |
| Fausse API | json-server + json-server-auth | Serveur de développement avec authentification |
| Linter | ESLint | Standard du métier |
| CSS | Tailwind via CDN | Balise script dans `index.html` |
| Formatage | Prettier | Format à l'enregistrement |

## Installation

    npm install

Puis **deux serveurs, dans deux terminaux séparés** :

    npm run api      # l'API sur le port 3000
    npm run dev      # l'application sur le port 5173

Ouvrir l'adresse annoncée par le terminal — elle change si un autre
serveur occupe déjà le port.

Si l'application ne répond plus alors que le code est correct, vérifier
d'abord que l'API tourne toujours.

## La fausse API

### Pourquoi

Le projet a besoin d'un serveur pour enregistrer les comptes et les
tâches. `json-server` en fournit un en quelques minutes, à partir d'un
simple fichier JSON. Le plugin `json-server-auth` y ajoute
l'authentification.

### Installation

    npm install -D json-server@0.17.4 json-server-auth

**La version 0.17.4 est obligatoire.** La 1.0 est en bêta et ne gère pas
le drapeau `-r routes.json`, indispensable ici.

Installées en `-D` : ce sont des dépendances de développement, elles ne
partent jamais chez un visiteur.

**Ne jamais lancer `npm audit fix --force`** sur ce projet : la commande
monterait json-server en version 1 et casserait la configuration.

### Ce que le plugin apporte

- Les points d'entrée `/register` et `/login`, prêts à l'emploi
- Un jeton JWT renvoyé à la connexion
- Les mots de passe chiffrés par bcrypt
- Des gardes de permission par route

### Les fichiers, à la racine du projet

**`db.json`** — la base de données. `users` reste **vide** : les comptes
doivent passer par `/register` pour que le mot de passe soit chiffré. Un
utilisateur écrit à la main ne pourrait jamais se connecter.

**`routes.json`** — les gardes de permission :

    {
      "/tasks*": "/660/tasks$1"
    }

Le `660` signifie : il faut être connecté pour lire ou écrire les tâches.

**`package.json`** — le script de lancement :

    "api": "json-server-auth db.json -r routes.json --port 3000"

### Vérifications

- `localhost:3000/users` → `[]`
- `localhost:3000/tasks` → **401 Missing authorization header**

Ce 401 est le comportement attendu : la garde fonctionne. Le journal
enregistre `/660/tasks`, ce qui prouve que la réécriture a lieu avant
la vérification.

Le 404 sur `localhost:3000` n'est pas un problème : json-server sert par
défaut le dossier `public`, qui n'a pas d'`index.html`.

## Structure

    taskmanager/
    ├── db.json                  base de données de la fausse API
    ├── routes.json              gardes de permission
    ├── public/
    │   ├── favicon.svg
    │   ├── icons.svg
    │   └── accueil.svg
    ├── src/
    │   ├── assets/
    │   ├── components/          morceaux réutilisés sur toutes les pages
    │   │   ├── Header.jsx
    │   │   └── Footer.jsx
    │   ├── pages/               un fichier par écran
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Tasks.jsx
    │   │   ├── CreateTask.jsx
    │   │   └── EditTask.jsx
    │   ├── exos/                brouillons d'entraînement (ignoré par git)
    │   ├── App.jsx              structure, routes et état du jeton
    │   ├── index.css            styles globaux
    │   └── main.jsx             point d'entrée, enveloppes globales
    ├── index.html
    └── .gitignore

## Chaîne d'affichage

1. Le navigateur charge `index.html`
2. Il y trouve une `<div id="root">` vide
3. Il exécute `src/main.jsx`, qui importe `index.css` et enveloppe
   `<App />` dans `<BrowserRouter>`
4. `App` construit la page et laisse le routeur remplir le centre

## Navigation

| Pièce | Rôle | Où |
|---|---|---|
| `BrowserRouter` | Surveille l'adresse | `main.jsx` |
| `Routes` | Choisit la route qui correspond | `App.jsx`, dans le `<main>` |
| `Route` | Une adresse et son composant | dans `Routes` |

`BrowserRouter` est dans `main.jsx` pour que toute l'application soit à
l'intérieur du routeur — condition nécessaire à `useNavigate`.

### Table des routes

| Adresse | Composant |
|---|---|
| `/` | Home |
| `/login` | Login |
| `/register` | Register |
| `/tasks` | Tasks |
| `/create` | CreateTask |
| `/edit` | EditTask |
| `*` | message « Page introuvable » |

La route `*` est placée **en dernier**, car `Routes` retient la première
qui correspond. Sans elle, une adresse erronée n'affiche rien du tout.

### Deux façons de naviguer

- **`<Link to="/tasks">`** — l'utilisateur clique
- **`navigate("/tasks")`** — le code décide, après une connexion réussie
  par exemple. Nécessite `const navigate = useNavigate();` déclaré en
  haut du composant

## Authentification

### Le circuit

    App          détient le jeton en ÉTAT, initialisé depuis localStorage
      ↓
    Login        range dans localStorage → prévient React → redirige
      ↓
    Header       reçoit le jeton en prop → adapte son menu
      ↓
    handleLogout efface localStorage → prévient React → redirige

### Pourquoi les deux mécanismes

**`localStorage`** assure la **persistance** : le jeton survit au
rechargement de la page et à la fermeture du navigateur.

**L'état React** assure la **réactivité** : lui seul déclenche un
nouveau rendu. `localStorage` ne prévient personne quand il change.

Les deux sont donc nécessaires, et pour des raisons différentes.

### L'état remonté dans `App`

    const [token, setToken] = useState(localStorage.getItem("token"));

    <Header token={token} setToken={setToken} />
    <Route path="/login" element={<Login setToken={setToken} />} />

Le jeton vit chez l'ancêtre commun de Header et Login. C'est le patron
appelé **remonter l'état** : quand deux composants doivent partager une
donnée, elle monte chez leur parent.

Une prop se passe à travers un `element` de Route comme n'importe où
ailleurs — `<Login setToken={setToken} />` est du JSX ordinaire.

### `Login.jsx`

    try {
      const result = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      localStorage.setItem("token", result.data.accessToken);
      setToken(result.data.accessToken);
      navigate("/tasks");
    } catch (err) {
      if (err.response?.status == 400) setError(true);
    }

Points importants :

- Les trois lignes de succès sont **dans le `try`** : si l'appel échoue,
  elles sont abandonnées et on saute au `catch`
- L'ordre compte : ranger, prévenir, puis rediriger
- `err.response?.status` et non `err.status` : sans réponse du serveur,
  il n'y a pas de statut, et le `?.` évite de chercher dans le vide
- `setError(false)` en début de tentative, sinon le message resterait
  affiché après une connexion réussie

### `Header.jsx`

Le menu s'adapte au jeton reçu :

| Condition | Ce qui s'affiche |
|---|---|
| `{token && …}` | Tâches, Déconnexion |
| `{!token && …}` | Connexion, Inscription |

Et la déconnexion fait le geste inverse de la connexion :

    const handleLogout = () => {
      localStorage.removeItem("token");
      setToken(null);
      navigate("/login");
    };

### Test de validation

1. Se connecter → le menu change **sans rechargement** (c'est l'état)
2. Rafraîchir la page → le menu reste connecté (c'est localStorage)
3. Se déconnecter → le menu revient à son état initial

## Formulaires

### Le champ contrôlé

    const [email, setEmail] = useState("");

    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

C'est un aller-retour : l'état commande le champ par `value`, le champ
commande l'état par `onChange`. Sans le retour, React verrouille le
champ en lecture seule.

`e.target` est l'élément qui a déclenché l'événement, `.value` son
contenu actuel.

Ordre d'écriture du `onChange`, en quatre temps :

1. `(e) =>` je reçois l'événement
2. `setXxx(` j'ouvre le rangement
3. `e.target.value` j'extrais
4. `)` je referme

### L'envoi

`e.preventDefault()` pose un marqueur sur l'événement. Le navigateur le
lit ensuite et s'abstient de son comportement natif — sans elle, la page
se rechargerait et l'application repartirait à zéro.

`onSubmit` est posé sur le `<form>` et non sur le bouton, pour que la
touche Entrée fonctionne aussi.

### `async` et `await`

Une requête réseau prend du temps.

- `async` sur la fonction autorise l'attente
- `await` fait attendre la réponse avant de continuer

Grâce à `await`, la redirection n'a lieu qu'**après** confirmation du
serveur.

### `try` et `catch`

Axios lève une exception sur les codes 400 et 500. Sans `try/catch`,
l'erreur passe inaperçue et les lignes suivantes sont abandonnées
silencieusement — l'utilisateur clique, rien ne se passe, et il n'a
aucune explication.

Le message du serveur se lit dans `err.response.data`.

### Les attributs `type`

Deux attributs sans rapport, même nom :

- sur un `<input>` : la sorte de donnée (`text`, `email`, `password`)
- sur un `<button>` : ce qu'il fait (`submit`, `button`, `reset`)

`type="password"` est indispensable. Un type inconnu comme `mail` ne
provoque aucune erreur : le navigateur retombe silencieusement sur
`text` et ne vérifie plus rien.

Les types sont écrits explicitement par discipline, pour ne pas oublier
`type="button"` le jour où un second bouton apparaîtra dans un
formulaire.

## Affichage conditionnel

| Forme | Où | Effet |
|---|---|---|
| `if (…) { }` | dans une fonction | empêche une action |
| `{a ? b : c}` | dans le JSX | affiche ceci ou cela |
| `{a && b}` | dans le JSX | affiche ceci ou rien |

Le retour anticipé (`return` nu) écarte les cas impossibles sans
imbriquer le reste de la fonction :

    if (!email || !password) {
      return;
    }

`!email` se lit « il n'y a pas d'email » — c'est une négation, pas un
test de vacuité.

## Mise en page

`App.jsx` enveloppe le tout dans `flex flex-col min-h-screen`. Avec le
`flex-1` du `<main>` et le `mt-auto` du footer, le pied de page reste
collé en bas.

### Piège rencontré

Le `<main>` se rétractait sur son contenu : 820 px sur l'accueil contre
266 px sur l'inscription, avec les mêmes classes.

Cause : sur un élément flex, `mx-auto` annule l'étirement. Sans largeur
explicite, l'élément se replie sur `fit-content`.

Correctif : ajouter `w-full`. Pour un bloc **centré et à sa largeur
maximale**, il faut les trois classes ensemble :

    w-full max-w-4xl mx-auto

## Conventions du projet

- Un composant = un fichier
- `className` et non `class`
- Styles en ligne sous forme d'objet : `style={{ margin: "auto" }}`
- Propriétés CSS en casse chameau : `maxWidth`
- Les éléments vides s'auto-ferment : `<input />`, `<img />`, `<br />`
- `margin: auto` ne centre que si l'élément est en `display: block` :
  une `<img>` et un `<input>` sont en ligne par défaut
- `gap` sur un conteneur flex espace ses enfants directs
- Un `<textarea>` passe par `value` et s'auto-ferme, contrairement au
  HTML pur
- Console du navigateur maintenue vide de tout avertissement
- Vérifier la ligne d'import dès qu'un outil nouveau apparaît dans un
  fichier

## Styles

`index.css` est la feuille globale, importée une seule fois dans
`main.jsx`. Elle contient les règles de formulaire et la classe
`.error-form`.

Sur les champs, les classes Tailwind l'emportent sur les règles
`form input` : une classe prime sur un sélecteur d'élément.

## Sécurité

- Dépendances surveillées par Dependabot, activé au niveau du compte
  pour tous les dépôts présents et futurs
- Push protection active : un commit contenant un secret est bloqué
- `npm audit` s'exécute automatiquement après chaque `npm install`

Limite connue et assumée : le jeton est rangé dans `localStorage`, donc
lisible par tout JavaScript exécuté dans la page. Un cookie `httpOnly`
serait plus sûr, mais json-server-auth ne le propose pas. Acceptable
pour un projet de formation, à revoir avec un vrai serveur.

`required` sur un champ ne protège que le navigateur et se contourne :
un vrai serveur devra valider de son côté.

## État d'avancement

Fait :
- Projet créé, configuré, versionné et publié sur GitHub
- Header, Footer, illustration d'accueil
- Navigation complète : six routes plus l'attrape-tout
- Fausse API avec authentification
- Inscription et connexion fonctionnelles
- Jeton rangé, état remonté dans `App`, menu conditionnel
- Première carte de tâche, écrite en dur

À faire :
- Remplacer la carte en dur par une liste construite avec `map`
- Intercepteur Axios pour joindre le jeton à chaque requête
- Modification et suppression d'une tâche
- Protéger les routes privées
- Installation propre de Tailwind avant la mise en ligne

## Améliorations prévues après le cours

- Centraliser l'adresse de l'API dans `src/api.js` avec
  `axios.create({ baseURL })`, et l'y lire depuis une variable
  d'environnement `VITE_API_URL`. Le jour du déploiement,
  `localhost:3000` n'existera plus
- Une variable `VITE_` finit dans le paquet livré au navigateur :
  jamais de secret dedans
- Remplacer les règles de `index.css` par des composants réutilisables,
  à commencer par un `<Champ />` portant les classes une seule fois
- Retirer les `console.log` de débogage
- Écrire `=== ` plutôt que `== `
- Déplacer le `navigate` dans le `try` de Register

## Points à corriger

- Imports nommés `Registeur` et `CreatTask` alors que les fichiers
  s'appellent `Register` et `CreateTask`
- « Connection » et « Déconnection » dans le Header : connexion et
  déconnexion prennent un x en français
