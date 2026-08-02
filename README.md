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