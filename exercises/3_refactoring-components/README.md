# Enzyme vs React Testing Library - Refactoring components

## A propos de l'exercice

Bien que nous ayons réorganisé le projet React précédemment,
il reste du refactoring à réaliser, notamment pour décomposer au maximum nos composants.

En effet, si vous prenez le composant Game, 
la gestion des `moves` et du `status` peuvent être délégués chacun à un `stateless functional component`
qui sera chargé de leur affichage. 

**Vous avez dit `stateless functional component` ? Plaît-il ?**

Oui, il s'agit d'une fonction qui pour tout paramètre reçu, est chargée de retourner
systématiquement le même code JSX. En effet, il n'y a pas de notion d'état (d'où le `stateless`).
On appelle aussi ce type de fonction : une `fonction pure`.

D'ailleurs, vous avez déjà été amené à créer un functional component précédemment,
lors du tutoriel TicTacToe, il s'agit de `Square`.

Note pour plus tard : Vous verrez dans un prochain exercice qu'on distingue aussi les `stateful functional component`

Je vous laisse implémenter ces changements.

Vous devez obtenir la structure suivante à la fin :
```
3_refactoring-components/
  public/
  src/
    components/
        Board.js
        Game.js
        Moves.js
        Square.js
        Status.js
    css/
        index.css
    index.js
  package.json     
  README.md
```

## Ressources

[Stateless functional components](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)