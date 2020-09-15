# Tic-Tac-Toe Kata

## Introduction & contexte

Ce kata se base sur le tutoriel "[TicTacToe](https://fr.reactjs.org/tutorial/tutorial.html)" de la communauté React 
que vous pouvez suivre afin d'appréhender les fondamentaux de React, avant
d'aborder des sujets qui n'étaient pas présents dans le tutoriel 
comme les tests unitaires sur nos composants, ainsi que la mise en place des hooks. 

## Prérequis

- Connaître les principales fonctionnalités de l'ES6

## Objectifs

- Apprendre les fondamentaux de React (si ce n'était pas le cas avant)
- Structurer correctement son application React
- Tester nos composants React
- Mettre en place les hooks (et les tests qui vont bien)

## Exercices

### Exercice 1: Immersion par la pratique

Seulement pour ceux qui souhaitent maîtriser les fondamentaux de React,
réalisez le tutoriel "[TicTacToe](https://fr.reactjs.org/tutorial/tutorial.html)".

Il y a tout ce qu'il vous faut dans la branche `master` pour commencer le tutoriel.

<details>
    <summary>Solution</summary>

    https://github.com/KLlopis/tic-tac-toe/tree/solution
</details>

### Exercice 2: Structurer son application React

Vous remarquerez que dans la solution du tutoriel, 
tous les composants React sont dans `index.js`.

C'est une mauvaise pratique, il est recommandé d'encapsuler chaque composant
dans un nouveau fichier js. Bien entendu, chaque composant devra être exporté 
avec `export`

De plus, la fonction `calculateWinner` n'est incluse dans aucun 
composant dans la solution. Or, cette responsabilité revient au 
composant `Game`.

Je vous laisse implémenter ces changements.

<details>
    <summary>Solution</summary>

    https://github.com/KLlopis/tic-tac-toe/tree/reorganized-arbo-solution
</details>

### Exercice 3: Tester les composants React

Il manque autre chose à la solution du tutoriel : les tests unitaires !!

Vous utiliserez [Jest](https://jestjs.io/docs/en/getting-started) et [Enzyme](https://enzymejs.github.io/enzyme/docs/api/).
Enzyme est la librairie qui va vous permettre de tester unitairement vos composants.

<details>
    <summary>Solution</summary>

    https://github.com/KLlopis/tic-tac-toe/tree/tested-solution
</details>

### Exercice 4: Mise en place des hooks

Votre nouvelle mission si vous l'acceptez : 
Mettre en place les hooks [useState](https://fr.reactjs.org/docs/hooks-state.html) et [useEffect](https://fr.reactjs.org/docs/hooks-effect.html)

Dans un premier temps, remplacez tous les "class components" par des "functional components".
Pour ce qui est de `Game` qui exploite un state, c'est dans ce cas que vous allez introduire
le hook `useState` dans ce "stateful functional component".

Dans un second temps, vos tests développés précédemment ne passeront plus, notamment
pour le composant `Game` qui utilise maintenant le hook `useState`.

Sachez qu'avec Enzyme et Jest, il n'est pas possible d'appeler les hooks directement 
dans les tests comme précédemment ou de les mocker.

Pour tester le composant `Game`, la solution consiste donc 
simuler les interactions requises avec le composant et vérifier
qu'il possède le bon comportement (affichage d'un message, mise à jour d'une donnée).

Vous pouvez vous aider des ressources suivantes :
- [Testing Function Components With Hooks](https://medium.com/better-programming/react-16-testing-function-components-with-hooks-f63705e2570)
- [Testing React Hook State Changes](https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga)

<details>
    <summary>Solution</summary>

    https://github.com/KLlopis/tic-tac-toe/tree/solution-with-hooks
</details> 