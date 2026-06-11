---
title: Plus Petit Multiple Commun (PPCM)
description: Savoir calculer le PPCM de deux nombres et résoudre des problèmes de périodicité.
tags:
  - arithmétique
  - PPCM
theme: Arithmétique
draft: false
---
# Plus Petit Multiple Commun (PPCM)
La [[Décomposition en produit de facteurs premiers|décomposition en facteurs premiers]] permet de déterminer facilement le PPCM de deux nombres entiers pour résoudre des problèmes de périodicité.

>[!methode] Calculer le PPCM de deux nombres
>Le PPCM de deux nombres est le produit de **tous les [[Nombres premiers#^2c3c7f|facteurs premiers]]** présents dans au moins une des décompositions, élevés à leur **plus grande [[Puissance|puissance]]**.

>[!exemple] Calculer le PPCM de 90 et 120
>1. On décompose en produit de facteurs premiers les deux nombres :
>$$90=2 \times 3^2 \times 5$$
>$$120=2^3 \times 3 \times 5$$
>2. On repère les facteurs présents dans au moins une décomposition et on prend la plus grande puissance. On a : $$2^3 ; 3^2 ; 5$$
>3. On calcule le produit : $$PPCM(90;120)=2^3 \times 3^2 \times 5=360$$
>360 est le plus petit nombre entier positif commun à 90 et 120.
>
>Si deux phares clignotent respectivement toutes les 90 et 120 secondes, ils clignoteront à nouveau ensemble après 360 secondes.

>[!exercice] Problème :
>Deux athlètes courent autour d'une piste. Ils partent en même temps. Le premier met 45s pour faire un tour, le second met 54s. 
>1. Décomposer 45 et 54 en produit de facteurs premiers.
>2. Au bout de combien de temps reviendront-ils au départ en même temps ?
>3. Combien de tour aura fait chaque athlète à ce moment là?

>[!exercice]- Correction :
>4. $45=3^2 \times 5$ et $54=2 \times 3^3$
>5. $PPCM(45;54)=2 \times 3^3 \times 5=270$
>Les deux athlètes reviendront en même temps au départ au bout de 270 secondes.
>6. $270 = 45 \times 6$ et $270=54 \times 5$
>Le premier athlète aura fait 6 tours alors que le second en aura fait 5.

