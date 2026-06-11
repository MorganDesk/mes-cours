---
title: Plus Grand Diviseur Commun (PGCD)
description: Savoir calculer le PGCD de deux nombres et résoudre des problèmes de partage.
tags:
  - arithmétique
  - PGCD
theme: Arithmétique
draft: false
---
# Plus Grand Diviseur Commun (PGCD)
La [[Décomposition en produit de facteurs premiers|décomposition en facteurs premiers]] permet de déterminer facilement le PGCD de deux nombres entiers pour résoudre des problèmes de partage.

>[!methode] Calculer le PGCD de deux nombres
>Le PGCD de deux nombres est le produit de tous les **[[Nombres premiers#^2c3c7f|facteurs premiers]] communs** aux deux décompositions, élevés à leur **plus petite [[Puissance|puissance]]**.

>[!exemple] Exemple : PGCD de 90 et 120.
>1. On décompose en produit de facteurs premiers les deux nombres :
>$$90=2 \times 3^2 \times 5$$
>$$120=2^3 \times 3 \times 5$$
>2. On repère les facteurs communs aux deux décompositions et on prend la plus petite puissance. On a $2 ; 3 ; 5$.
>3. On calcule le produit : $$PGCD(90;120)=2\times 3\times 5=30$$
>30 est le plus grand nombre entier qui divise 90 et 120.
>
>Si on a 120 roses rouge et 90 roses blanches, on pourra faire 30 bouquets identiques contenant chacun 4 roses rouge et 3 roses blanches.

>[!exercice] Exercice (extrait du DNB Juillet 2024 Antilles Martinique):
>Anne et Jean ont acheté 630 dragées roses et 810 dragées blanches qu’ils ont mises dans un sachet. Avec ces dragées, ils réalisent des ballotins pour leur mariage de sorte que : 
>- le nombre de dragées roses et le même dans chaque ballotin ;
>- le nombre de dragées blanches et le même dans chaque ballotin ;
>- toutes les dragées soient utilisées.
>1. Peuvent-ils réaliser 21 ballotins ?
>2. Décomposer 630 et 810 en produits de facteurs premiers.
>3. En déduire le nombre maximum de ballotins qu’Anne et Jean pourront réaliser. Donner alors la composition de chaque ballotin.

>[!exercice]- Corrigé :
>1. $630 = 21 \times 30$ et $810=21\times 31+12$
>810 n’est pas divisible par 21, donc toutes les dragées ne seront pas utilisées. Il est impossible de faire 21 ballotins en respectant les conditions données.
>2. $630=2 \times 3^2 \times 5 \times 7$
>$810=2 \times 3^4 \times 5$
>3. $PGCD(630; 810)=2 \times 3^2 \times 5=90$
>Ils pourront réaliser 90 ballotins.
>$630=90 \times 7$ et $810=90 \times 9$
>Chaque ballotin contiendra exactement 7 dragées roses et 9 dragées blanches.
