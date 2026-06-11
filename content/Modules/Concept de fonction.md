---
title: Concept de fonction
description: Comprendre ce qu'est une fonction et les notations liées.
tags:
  - fonction
  - notation
theme: Fonctions
niveaux:
  - 3e
draft: false
---
# Concept de fonction
>[!definition] Définition :
>Une **fonction** est un procédé qui, à un nombre de départ *x* (la **variable**), associe un unique nombre d’arrivé (noté *f(x)*).
>C’est une machine mathématique : 
>$$x \stackrel{fonction}{\longrightarrow} f(x)$$

^9d7bb3


Un programme de calcul est un exemple de fonction.

>[!exemple] Exemple :
>Voici un programme de calcul :
>- Choisir un nombre
>- Ajouter 3
>- Mettre le résultat au carré
>- Soustraire le double du nombre de départ
>
>Si on choisit 5 comme nombre de départ, on a : 
>$$5 \longrightarrow 8 \longrightarrow 64 \longrightarrow 54$$
>Si on choisit (-2) comme nombre de départ, on a : 
>$$(-2) \longrightarrow 1 \longrightarrow 1 \longrightarrow 5$$
>Si on appelle *x* le nombre choisit au départ alors on obtient :
>$$x \longrightarrow x+3 \longrightarrow (x+3)^2 \longrightarrow (x+3)^2-2 \times x$$

>[!propriete] Notations
>- On note : $f:x \mapsto f(x)$ (se lit : «la fonction *f* qui a *x* associe le nombre *f(x)*»).
>- On écrit : $y=f(x)$ (le nombre d’arrivé *y* est égal à l’image du nombre de départ *x* par la fonction *f*).

>[!exercice] Exercice :
>On considère le programme de calcul suivant :
>- Choisir un nombre
>- Le doubler
>- Ajouter 5 au résultat
>1. Quel résultat obtient-on si on choisit 4 comme nombre de départ ? Et pour -2 ?
>2. Quel nombre faut-il choisir au départ pour obtenir 8 à la fin ?
>3. Si on appelle *x* le nombre de départ, quelle expression littérale peut-on construire ?

>[!exercice]- Correction :
>1. Si le nombre de départ est 4, on obtient 13 à la fin. 
>    Si le nombre de départ est -2, on obtient 1 à la fin.
>2. Pour obtenir 8 à la fin, il faut choisir le nombre 1,5 au départ.
>3. $2x+5$
