---
title: Déterminer l’équation d’une droite
description: Savoir déterminer graphiquement et par le calcul l'équation d'une droite.
tags:
  - fonction
  - équation
  - droite
theme: Fonctions
niveaux:
  - 3e
draft: false
---
# Déterminer l’équation d’une droite
## Graphiquement
>[!methode] Méthode : Déterminer graphiquement l’équation d’une droite
>1. Déterminer le coefficient directeur :
>- On part d’un point précis de la droite.
>- On se déplace de 1 unité vers la droite.
>- On monte ou on descend pour rejoindre la droite.
>- **La valeur de ce déplacement est la pente *a*** (positive si on monte, négative si on descend).
>2. On lit graphiquement **l’ordonnée à l’origine**.
>3. On peut écrire alors la formule : $y=ax+b$.

>[!exemple] Exemple :
>On considère la droite suivante :
>![[Déterminer graphiquement l'équation d'une droite.png]]
>- On se place au point de coordonnées $(0;3)$.
>- On se déplace de 1 unité vers la droite.
>- On descend de 2 unités pour rejoindre la droite. Le coefficient directeur est $a=-2$.
>- Le point $(0;3)$ est sur la droite, l’ordonnée à l’origine est donc $b=3$.
>- L’équation de la droite est : $y=-2x+3$.

## Par le calcul
>[!methode] Méthode : Déterminer l’équation d’une droite par le calcul
>Pour déterminer l’équation d’une droite $y=ax+b$ par le calcul, il est nécessaire d’avoir deux points appartenant à cette droite.
>1. On calcule le **coefficient directeur** avec la formule :
>$$a=\frac{f(x_2)-f(x_1)}{x_2-x_1}$$
>2. On résout une équation utilisant un point de la droite pour déterminer **l’ordonnée à l’origine**.

>[!exemple] Exemple :
>On considère la fonction affine telle que $f(1) = -1$ et $f(3)=5$.
>3. Le coefficient directeur de la droite est :
>$$a=\frac{-1-5}{1-3}=\frac{-6}{-2}=3$$
>4. On sait que $f(1)=-1$. L’ordonnée à l’origine est :
>$$f(1) = ax+b=3 \times 1 +b=-1$$
>$$\begin{aligned}3+b&=-1\\3+b-3&=-1-3\\b&=-4\end{aligned}$$
>L’équation de la droite est donc $y=3x-4$.

>[!remarque] Remarque :
>Le problème est le même si on donne les coordonnées des points sous la forme $(x; f(x))$.

>[!exercice] Exercice :
>Déterminer l’équation de la droite passant par les points $A(1; 3)$ et $B(2; 1)$.

>[!exercice]- Correction :
>- Le coefficient directeur est : 
>$$a=\frac{3-1}{1-2}=\frac{2}{-1}=-2$$
>- L’ordonnée à l’origine est : 
>$$\begin{aligned}-2\times 1+b&=3\\-2+b&=3\\b&=5\end{aligned}$$
>- L’équation de la droite est donc $y=-2x+5$.

