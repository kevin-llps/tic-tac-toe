# Tic-Tac-Toe Kata

## A propos de l'exercice

Vous remarquerez que dans la solution du tutoriel, 
tous les composants React sont dans `index.js`.

C'est une mauvaise pratique, il est recommandé d'encapsuler chaque composant
dans un nouveau fichier js. Bien entendu, chaque composant devra être exporté 
avec `export default`.

**Pourquoi `export default` ?**

D'abord, il faut savoir qu'il y a deux types d'export différents :
- Les exports nommés ("named exports")
    - Vous pouvez exporter plusieurs composants dans un même fichier
    ```
    class ReactComponent {}
    class AnotherReactComponent {}
    
    export { ReactComponent, AnotherReactComponent }
    ``` 
    - A l'import, vous devrez donné le même nom que le composant exporté
    ```
    import { ReactComponent, AnotherReactComponent } from './components/reactComponents'
    ```
- Les exports par defaut ("default exports")
    - Vous pouvez exporter un seul composant dans un même fichier
    ```
    export default class Component {}
    ```
    - A l'import, vous pouvez exporter le composant avec un nom différent
    ```
    import MyComponent from './components/component'
    ```    
  
De notre côté, nous souhaitons avoir un composant par fichier,
c'est donc `export default` qui convient le mieux. 

**Et la fonction `calculateWinner` ?**
  
La fonction `calculateWinner` n'est incluse dans aucun 
composant dans la solution. Or, cette responsabilité revient au 
composant `Game`.

Je vous laisse implémenter ces changements.

Vous devez obtenir la structure suivante à la fin :
```
2_organize-your-react-app/
  public/
  src/
    components/
        Board.js
        Game.js
        Square.js
    css/
        index.css
    index.js
  package.json     
  README.md
```

## Ressources

[Export](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export)

[Exporting React components - export vs export default](https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default)