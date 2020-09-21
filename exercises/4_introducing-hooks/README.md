# Tic-Tac-Toe Kata

## A propos de l'exercice

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
à simuler les interactions requises (clic, focus, ...) avec le composant et vérifier
qu'il possède le bon comportement (affichage d'un message, mise à jour d'une donnée, ...).

Vous pouvez vous aider des ressources suivantes :
- [Testing Function Components With Hooks](https://medium.com/better-programming/react-16-testing-function-components-with-hooks-f63705e2570)
- [Testing React Hook State Changes](https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga)