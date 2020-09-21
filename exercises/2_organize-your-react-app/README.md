# Tic-Tac-Toe Kata

## A propos de l'exercice

Vous remarquerez que dans la solution du tutoriel, 
tous les composants React sont dans `index.js`.

C'est une mauvaise pratique, il est recommandé d'encapsuler chaque composant
dans un nouveau fichier js. Bien entendu, chaque composant devra être exporté 
avec `export`

De plus, la fonction `calculateWinner` n'est incluse dans aucun 
composant dans la solution. Or, cette responsabilité revient au 
composant `Game`.

Je vous laisse implémenter ces changements.