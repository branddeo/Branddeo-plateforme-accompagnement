# SPEC V3 — Landing page YouTube Impact (Branddeo Academy)

**Objectif du document :** donner à Claude Code tout ce qu'il faut pour construire la landing page sans improviser. Structure, textes définitifs, identité visuelle, composants, comportements.

**Ce qui a changé en V3 (changement de modèle, important) :**
- **Nouveau modèle : funnel de candidature, PAS d'achat direct.** Tous les CTA mènent à un **appel de candidature** (prise de rendez-vous). **Aucun prix n'est affiché** sur la page.
- **Nouvelle structure + nouveau design** inspirés d'une référence (Ecom Accelerator), mais **entièrement recolorés à l'identité Branddeo** (voir section 0).
- Les textes ci-dessous sont une proposition de copy adaptée à la formation YouTube Impact, à valider/ajuster par Fanel. Les `[PLACEHOLDER]` / `[À COMPLÉTER]` / `[À DÉCIDER]` attendent ses contenus ou décisions.

---

## 0. Références visuelles — INSTRUCTION PRIORITAIRE

Deux références distinctes, deux rôles différents. **Ne pas les confondre.**

### A. Structure & layout → `reference-structure-ecom/`
11 captures d'un site de référence (Ecom Accelerator). Elles servent **UNIQUEMENT de modèle de structure, de disposition et de types de composants** : ordre des sections, agencement (bento, carrousels, accordéons, timelines, masonry), hiérarchie.

```
01-hero.jpeg
02-temoignages-carrousel.jpeg
03-accompagnement-unique-bento.jpeg
04-garantie-et-coachs.jpeg
05-parcours-phases-accordeon.jpeg
06-phases-et-step-timeline.jpeg
07-step-timeline.jpeg
08-comparaison-offres.jpeg
09-resultats-masonry-wins.jpeg
10-faq.jpeg
11-prendre-rdv-candidature.jpeg
```

⚠️ **CE N'EST PAS UN SITE BRANDDEO. NE PAS COPIER SES COULEURS (vert), NI SES TEXTES, NI SON LOGO.** C'est le site d'un tiers : la page finale ne doit pas en être un clone recoloré. On en reprend la **logique de structure et l'esprit des composants**, puis on l'habille intégralement en identité Branddeo et on réécrit tout le contenu. Le résultat doit être reconnaissable comme une page Branddeo, pas comme « Ecom Accelerator en violet ».

### B. Identité visuelle & couleurs → `reference-identite-branddeo/`
Captures du site agence Branddeo (branddeo.fr) + **logos officiels**. C'est d'ICI que viennent toutes les couleurs, les glows, le traitement typo et le logo.

```
branddeo-hero.jpeg
branddeo-pricing-cartes.jpeg
branddeo-etude-de-cas.jpeg
logo-wordmark-branddeo.png   (navbar + footer)
logo-symbole-corail.png      (favicon / pastille / accents)
```

### Règle de combinaison
**Structure d'Ecom + identité de Branddeo.** Concrètement :
- là où Ecom utilise du **vert**, on utilise le **violet/corail Branddeo** (voir charte section 2) ;
- les glows verts → **glows violet/magenta** ;
- le mot clé surligné en vert dans les titres → **mot clé en corail** `#ff605c` ;
- les boutons verts → **boutons pill corail** ;
- les cartes vertes claires (timeline) → cartes **violet/corail** dans l'esprit Branddeo ;
- la typo → **Khand (titres) + Inter (corps)**.

**En cas de conflit**, le spec écrit (parties 2 et 3) gagne toujours.

---

## 1. Contexte produit

- **Produit :** **L'incubateur YouTube Impact** (Branddeo Academy) — un accompagnement de 90 jours pour lancer, développer et monétiser une chaîne YouTube, avec deux parcours : *faceless* (sans visage, production assistée par IA) et *créateur* (face caméra).
- **Positionnement central (à marteler) : c'est un INCUBATEUR, pas une formation.** On se sort de la catégorie « formation YouTube » (vidéos qu'on regarde seul) pour entrer dans une catégorie premium et rare : l'incubateur qui t'accompagne jusqu'au résultat. Accroche assumée et frontale : **« Le seul incubateur qu'il te faut pour gagner de l'argent avec ta chaîne YouTube en parallèle de ton salaire. »**
- **Deux codes incubateur conservés et mis en avant :**
  1. **Sélection** : on ne s'inscrit pas, on **candidate**. La page filtre et qualifie (cohérent avec l'appel de candidature et l'absence de prix).
  2. **Accompagnement jusqu'au premier revenu** : la promesse n'est pas un montant, c'est de t'amener jusqu'à ton **premier revenu YouTube en parallèle de ton salaire**.
- **Modèle de conversion : candidature.** La page ne vend pas en direct et **n'affiche aucun prix**. Objectif unique : **faire réserver un appel de candidature**.
- **Audience (encodée par le contexte, jamais étiquetée frontalement) :** personnes qui ont déjà un revenu fixe qui tombe chaque mois — salariés, alternants, stagiaires — et qui veulent un premier revenu en parallèle grâce à YouTube, sans tout quitter. C'est la logique **B1** : un premier revenu à côté, pas le saut dans le vide. Le faceless comme le créateur face caméra sont couverts.
- **Preuve sociale disponible :** résultats réels de chaînes (captures de revenus / analytics), note 4/5 Trustpilot, wins de communauté.
- **Ton :** direct, parlé, tutoiement, phrases courtes.
- **Garde-fous de crédibilité (NON négociables) :**
  - **Aucune promesse de revenus chiffrés ni de garantie de gains.** On promet de t'accompagner jusqu'à ton premier revenu, on ne promet pas un montant. On ne reprend PAS le « Générez X€ ou remboursé » de la référence.
  - **Ne rien inventer** : témoignages, nombre de membres, chiffres de résultats, profils d'accompagnants, garanties → tout vient de Fanel, sinon `[PLACEHOLDER]`.

---

## 2. Charte graphique (obligatoire)

### Couleurs
| Rôle | Couleur | Hex |
|---|---|---|
| Fond général | Violet très sombre | `#0f081e` |
| Surfaces / cartes | Violet sombre dérivé | `#1a1030` / `#150b28` |
| Violet principal — glows, dégradés | Violet | `#5d2999` |
| CTA, accents, mot clé des titres, états actifs | Corail | `#ff605c` |
| Texte principal | Blanc | `#FFFFFF` |
| Texte secondaire | Lavande pâle | blanc à ~60-70 % |
| Validation / checks | Vert | `#41af6e` |

Touches ponctuelles : magenta `#ae08b7`, bleu `#0f4696`.

### Identité (reprise de branddeo.fr)
- **Dark mode violet intégral**, glows violet/magenta diffus dans les angles et derrière les éléments clés (CSS radial-gradient + blur).
- **Titres Khand condensé**, mot clé en **corail** `#ff605c`. Soulignement dégradé sous le titre du hero.
- **Cartes** très sombres, bordure fine, glow interne, coins arrondis ~16-20px.
- **Boutons** pill corail, flèche → en fin de libellé, léger glow.
- **Séparateurs pointillés** (bleutés/violets) entre certaines sections.
- **Chiffres-preuves** en gros Khand corail.
- Typo corps : **Inter**.

### Logo
`logo-wordmark-branddeo.png` en navbar et footer. `logo-symbole-corail.png` (double-chevron corail) en favicon/pastille/accents. Marque affichée : « Branddeo » (mention « YouTube Impact » à côté possible).

### Principes
- Responsive mobile-first.
- Glows statiques, animations sobres (reveal au scroll, marquee, accordéon). Respecter `prefers-reduced-motion`.

---

## 3. Structure de la page — ordre définitif

**Tous les CTA pointent vers la prise de rendez-vous (section 12), via l'ancre `#candidater`.** Libellés de CTA possibles, à utiliser en variant : **« Candidater à l'incubateur »**, **« Candidater »**, **« Réserver mon appel »**, **« Je veux ma place »**. Jamais de prix sur ces boutons. Vocabulaire de sélection assumé : on **candidate**, on ne « s'inscrit » pas.

---

### SECTION 1 — Navbar
*Réf. structure : 01-hero.jpeg (barre du haut).*

- Logo Branddeo à gauche.
- Liens ancres : Le programme · Le parcours · Résultats · FAQ
- À droite : un CTA principal pill corail **« Candidater »** (→ `#candidater`). Option secondaire : bouton **« Discuter sur WhatsApp »** (Branddeo utilise WhatsApp) — `[À CONFIRMER : lien wa.me]`.
- Sticky, fond `#0f081e`, blur léger au scroll.

---

### SECTION 2 — Hero
*Réf. structure : 01-hero.jpeg. Identité : branddeo-hero.jpeg.*

- **Badge au-dessus du titre** (pilule sombre, avatars empilés) : `+[À COMPLÉTER : nombre] créateurs accompagnés`
- **Sur-titre / eyebrow (au-dessus du H1, lavande pâle ou corail) :** L'incubateur YouTube Impact
- **H1 (Khand, mot clé en corail) — accroche incubateur frontale, PAS de promesse de revenus chiffrés :**
  > Le **seul incubateur** qu'il te faut pour gagner de l'argent avec ta chaîne YouTube, en parallèle de ton salaire.
- **Sous-titre (Inter, lavande pâle) :**
  > On ne te lâche pas une formation dans les mains. On t'accompagne, étape par étape, jusqu'à ton premier revenu YouTube — avec ou sans montrer ton visage. Tu gardes ton job, tu construis à côté.
- **CTA principal (pill corail) :** Candidater à l'incubateur → (→ `#candidater`)
- **Ligne de 3 micro-promesses** (pastille corail + texte) :
  > ● Accompagnement jusqu'au 1er revenu   ● Sur candidature   ● Faceless ou face caméra
- **Bloc VSL** (mockup vidéo comme la réf, glow violet derrière) : `[PLACEHOLDER VSL]` — conteneur prêt pour embed/mp4, visuel de couverture Branddeo en attendant.

---

### SECTION 3 — Témoignages « Ils l'ont fait. À ton tour. »
*Réf. structure : 02-temoignages-carrousel.jpeg.*

- **H2 (mot clé corail) :** Ils l'ont fait. **À ton tour.**
- **Sous-titre :** Salariés, étudiants, parents ou indépendants : tous sont partis du même point. Découvre leurs parcours.
- Carrousel de cartes témoignages verticales (vidéo ou photo + verbatim court + prénom + bouton « Voir le témoignage »).

`[PLACEHOLDER : témoignages réels fournis par Fanel (vidéos/photos + verbatims + prénoms, avec autorisation). NE PAS inventer. En attendant : cartes neutres marquées « témoignage à venir ».]`

---

### SECTION 4 — Un incubateur, pas une formation
*Réf. structure : 03-accompagnement-unique-bento.jpeg.*

- **H2 (mot clé corail) :** Un **incubateur**, pas une formation de plus
- **Sous-titre :** Une formation, tu la regardes seul. Un incubateur t'accompagne jusqu'au résultat : méthode, suivi, communauté, et un cadre qui te pousse jusqu'à ton premier revenu.
- **CTA (pill corail, à droite du sous-titre) :** Candidater à l'incubateur → (→ `#candidater`)

**Bento grid (4 blocs, style cartes Branddeo) :**

1. **Accompagnement & suivi** — Tu n'avances pas seul : un suivi régulier, des retours sur ton travail, tes blocages levés au fur et à mesure. `[À CONFIRMER : préciser le format réel — coach dédié ? lives de suivi ? — ne pas survendre un 1:1 s'il n'existe pas.]`
2. **Communauté privée** (avatars + `+[À COMPLÉTER] membres` + badge LIVE) — Partage tes avancées, pose tes questions, obtiens des réponses. Lives réguliers.
3. **Pratique > théorie** — Chaque module te fait passer à l'action : tu appliques, tu publies. (Visuels : notifications de vues/abonnés dans l'esprit des notifs Shopify de la réf, mais en YouTube.)
4. **Conforme aux règles YouTube** (icône cadenas/bouclier) — Une méthode qui respecte les règles de la plateforme, notamment sur le contenu produit avec l'IA. `[À DÉCIDER : si Fanel veut une garantie, la formuler ici SANS promettre de revenus. Sinon, garder cette carte « conformité ».]`

---

### SECTION 5 — Le parcours (accordéon de phases)
*Réf. structure : 05-parcours-phases-accordeon.jpeg + 06.*

- **H2 (mot clé corail) :** Un parcours conçu pour transformer **des débutants en créateurs qui monétisent**
- **Sous-titre :** Tu arrives motivé. Tu repars avec une chaîne lancée, des vidéos qui tournent, et une méthode pour durer.

**Carte « Imagine » (en tête, glow + symbole corail) :**
> **Imagine.** Tu es au jour 1. Tu as peut-être une idée de chaîne. Peut-être pas. Tu as surtout une envie : que ça change. En face de toi, un programme qui te prend par la main, étape après étape, sans jamais te laisser seul.

**Accordéon des phases** (titres définitifs, contenu à détailler par Fanel) :
- **Phase 1 — Le déclic** : clarté sur ta niche, ton positionnement, pourquoi YouTube est ton meilleur levier.
- **Phase 2 — Les idées qui marchent** : repérer les bons sujets (outliers, inspiration), valider ta niche.
- **Phase 3 — La naissance de ta chaîne** : création, identité, packaging (titres + miniatures).
- **Phase 4 — La machine à contenu** : scripts, production faceless ou caméra, l'IA comme assistant.
- **Phase 5 — Les premières vidéos qui performent** : publication, algorithme, rétention.
- **Phase 6 — La monétisation** : générer tes premiers revenus, sans dépendre uniquement de l'AdSense.
- **Phase 7 — Le décollage** : régularité, montée en puissance, autonomie.

`[À COMPLÉTER : Fanel détaille le contenu déroulant de chaque phase.]`

**Carte de clôture (glow, comme la réf) :**
> Ce n'est pas un cours. **C'est un incubateur.** Si tu es prêt à t'impliquer, on est prêt à t'emmener jusqu'à ton premier revenu.
> CTA : Candidater à l'incubateur → (→ `#candidater`)

---

### SECTION 6 — Tu n'es jamais livré à toi-même (step timeline)
*Réf. structure : 07-step-timeline.jpeg.*

- **H2 (mot clé corail) :** Tu n'es **jamais** livré à toi-même
- **Sous-titre :** Ce n'est pas un cours en ligne où on te dit « bon courage ». Ici, chaque étape est guidée et validée.

**Timeline horizontale (5 étapes, cartes corail/violet dans l'esprit Branddeo, jalons reliés) :**
1. **Diagnostic initial** — on fait le point : ton niveau, ton objectif, tes contraintes.
2. **Ton plan personnalisé** — la feuille de route adaptée à ton profil (faceless ou créateur).
3. **Début du programme** — tu lances, module par module.
4. **Analyse & ajustements** — tu ne publies pas dans le vide : chaque vidéo est analysée pour s'améliorer.
5. **Objectif autonomie** — tu sais produire, publier et faire grandir ta chaîne seul.

---

### SECTION 7 — Qui t'accompagne
*Réf. structure : 04-garantie-et-coachs.jpeg (grille de profils).*

- **H2 (mot clé corail) :** Une **équipe** qui produit déjà des chaînes qui performent
- **Bandeau de réassurance** (pilule) : `[À COMPLÉTER : ex. « Branddeo, c'est +16 experts accompagnés et des chaînes suivies au quotidien » — chiffres réels uniquement.]`
- Grille de profils : Fanel + équipe Branddeo. Pour chaque profil : photo, prénom, rôle, et éventuellement une preuve réelle (chaîne gérée, résultat).

`[À COMPLÉTER : profils réels (photos, noms, rôles, preuves). NE PAS inventer de coachs ni de chiffres de CA. Si l'équipe est réduite, présenter Fanel + 1-2 personnes plutôt qu'une fausse grande équipe.]`

---

### SECTION 8 — Plus qu'une formation (comparaison)
*Réf. structure : 08-comparaison-offres.jpeg — MAIS sans prix et sans 2e offre payante.*

- **H2 (mot clé corail) :** YouTube Impact, c'est un **incubateur**, pas une formation
- **Sous-titre :** Tu ne rejoins pas une bibliothèque de vidéos à regarder seul. Tu intègres un incubateur qui te suit, te corrige et te pousse jusqu'à ton premier revenu.

**Deux colonnes comparatives (SANS aucun prix) :**
- Colonne 1 — **Une formation classique** (grisée) : vidéos préenregistrées · tu avances seul · aucun retour sur ton travail · personne ne te pousse · tu abandonnes souvent en cours de route.
- Colonne 2 — **L'incubateur YouTube Impact** (mise en avant, glow corail) : entrée sur sélection · méthode structurée étape par étape · parcours faceless OU créateur · communauté privée + lives · retours sur ton travail · accompagnement jusqu'à ton premier revenu en parallèle de ton salaire.

⚠️ Pas de checklist de prix, pas de « à partir de X€ ». La comparaison porte sur la valeur, pas le tarif.

---

### SECTION 9 — Des résultats concrets, visibles et documentés
*Réf. structure : 09-resultats-masonry-wins.jpeg. Identité chiffres : branddeo-etude-de-cas.jpeg.*

- **H2 (mot clé corail) :** Des **résultats** concrets, visibles et documentés
- **Sous-titre :** Pas des promesses. Des captures d'écran. Des vrais chiffres.
- **CTA (pill corail) :** Voir comment ça se passe → (→ `#candidater`)

**Grille masonry de cartes-preuves** : captures réelles (revenus AdSense, analytics YouTube Studio, messages de wins de la communauté). Les chiffres marquants ressortent en gros Khand corail.

`[À COMPLÉTER : captures réelles fournies par Fanel. Flouter infos sensibles. NE PAS inventer. Ajouter une ligne de contexte par capture (niche, période).]`

**Micro-texte (lavande pâle, petit) :** Résultats réels, non garantis : ils dépendent de ta niche, de ta régularité et de ton travail.

---

### SECTION 10 — Badge Trustpilot (bandeau)
- Bandeau fin centré : ★★★★ **Noté 4/5 sur Trustpilot** — `[À COMPLÉTER : lien Trustpilot]`. Logo Trustpilot officiel, sobre.

---

### SECTION 11 — FAQ (accordéon)
*Réf. structure : 10-faq.jpeg.*

- **H2 (mot clé corail) :** **Questions** fréquemment posées

Accordéon (un item ouvert à la fois, premier ouvert) :

1. **C'est quoi la différence entre un incubateur et une formation YouTube ?**
   > Une formation, c'est des vidéos que tu regardes seul, et débrouille-toi. Un incubateur, c'est un cadre : on te sélectionne, on t'accompagne, on corrige ton travail et on te pousse jusqu'à ton premier revenu. Tu n'avances jamais seul.
2. **Est-ce que ça marche si je ne veux pas montrer mon visage ?**
   > Oui. Un parcours faceless complet est prévu : niche, production assistée par IA, voix off, montage, publication.
3. **Je suis salarié et j'ai peu de temps. C'est jouable ?**
   > Oui. Tu avances à ton rythme et la méthode vise tes premiers revenus en parallèle de ton activité, sans tout quitter du jour au lendemain.
4. **Je débute totalement. C'est pour moi ?**
   > Oui. On part de zéro : création de chaîne, niche, premières vidéos. Aucun prérequis technique.
5. **Le contenu produit avec l'IA, c'est autorisé par YouTube ?**
   > Oui, en respectant les règles de la plateforme (notamment le contenu inauthentique). Un module entier y est consacré. L'IA propose, l'humain décide.
6. **Combien de temps avant mes premiers revenus ?**
   > Aucun chiffre garanti, et méfie-toi de ceux qui en promettent. Ça dépend de ta niche, de ta régularité et de ton travail. Le programme maximise tes chances et t'évite les erreurs qui coûtent des mois.
7. **Comment se passe l'appel de candidature ?**
   > Tu réserves un créneau, on fait le point sur ta situation et ton objectif, et on voit ensemble si YouTube Impact est fait pour toi. `[À AJUSTER selon le déroulé réel de l'appel.]`
8. **À qui s'adresse YouTube Impact ?**
   > `[À COMPLÉTER : cadrage de Fanel — et éventuellement à qui ça NE s'adresse pas.]`

---

### SECTION 12 — Prendre rendez-vous (appel de candidature) — ancre `#candidater`
*Réf. structure : 11-prendre-rdv-candidature.jpeg.*

- **H2 (mot clé corail) :** **Candidate** à l'incubateur YouTube Impact
- **Sous-titre :** L'entrée se fait sur sélection. Réserve ton appel : on fait le point sur ton projet et ta situation, et on voit ensemble si l'incubateur est fait pour toi.
- **Embed de réservation** (iClosed, Calendly ou équivalent) : `[PLACEHOLDER : lien/embed de l'outil de prise de rendez-vous fourni par Fanel.]`
- Bloc « IMPORTANT » optionnel au-dessus du formulaire (cadrage de l'appel, comme la réf) : `[À COMPLÉTER par Fanel — ex. cet appel sert à voir si le programme te correspond ; respecte le créneau réservé, etc.]`
- **Aucun prix affiché.**

---

### SECTION 13 — Footer
- Logo Branddeo + baseline : *Développe tes revenus, ton autorité et ton impact grâce à YouTube.*
- Liens : Le programme · Le parcours · Résultats · FAQ · `[À COMPLÉTER : réseaux, WhatsApp]`
- Légal : Mentions légales · CGV · Politique de confidentialité `[PLACEHOLDER]`
- Contact : `[À COMPLÉTER : email]`
- © 2026 Branddeo. Tous droits réservés.

---

## 4. Comportements & technique
- **Ancres / smooth scroll** vers `#candidater`, `#programme`, `#parcours`, `#resultats`, `#faq`.
- **Carrousels** (témoignages, résultats) : défilement fluide, bords fondus, pause au hover, `prefers-reduced-motion`.
- **Accordéons** (phases, FAQ) : un item ouvert à la fois.
- **VSL** : poster + lazy-load, prêt pour embed/mp4.
- **Embed de réservation** : prévoir un conteneur responsive pour l'outil tiers.
- **Glows** en CSS (pas d'images lourdes). Images lazy-load, webp/avif. Mobile-first.
- **SEO** : title « YouTube Impact — Le seul incubateur pour monétiser ta chaîne YouTube en parallèle de ton salaire | Branddeo », meta description = sous-titre hero, OG `[PLACEHOLDER image OG]`.
- **Accessibilité** : focus visible, contrastes vérifiés, alt sur images.

## 5. Règles de rédaction
- Tutoiement, français parlé, phrases courtes.
- **Vocabulaire incubateur** : on dit « incubateur », « candidater », « être sélectionné », « ta place ». On évite « formation », « cours », « s'inscrire » pour parler de YouTube Impact (sauf pour le contraster avec une formation classique).
- **Fil rouge** : l'accompagnement jusqu'au **premier revenu en parallèle du salaire** (logique B1). Cible encodée par le contexte (revenu fixe chaque mois), jamais étiquetée frontalement.
- Interdit : « ce n'est pas X, c'est Y » à répétition, ton motivationnel sur-produit, jargon vide, **promesses de revenus chiffrés ou garanties de gains**.

## 6. Checklist avant mise en ligne (pour Fanel)
- [x] Logos fournis (`reference-identite-branddeo/`)
- [ ] Valider/ajuster le copy proposé (hero, phases, FAQ, comparaison)
- [ ] Détailler le contenu déroulant des 7 phases (section 5)
- [ ] Préciser le format réel d'accompagnement (coach dédié ? lives de suivi ?) → sections 2/4
- [ ] Décider : garantie ou non (sans promettre de revenus) → section 4
- [ ] Fournir les témoignages réels (section 3)
- [ ] Fournir les profils de l'équipe (section 7)
- [ ] Fournir les captures de résultats + contexte (section 9)
- [ ] Fournir le lien Trustpilot (section 10)
- [ ] Compléter la FAQ #7 (déroulé appel) et #8 (à qui ça s'adresse)
- [ ] Fournir l'outil + lien de prise de rendez-vous (section 12)
- [ ] Compléter le nombre de créateurs accompagnés / membres (sections 2, 4, 7)
- [ ] Produire la VSL et l'intégrer
- [ ] Email de contact, WhatsApp, pages légales, image OG

## 7. Note stratégique (à valider par Fanel)
Le prix (497€) n'apparaît plus et tout passe par un appel de candidature. C'est cohérent pour qualifier et réchauffer les prospects avant de vendre. À garder en tête : un appel de candidature ajoute une étape entre le visiteur et l'achat — c'est idéal si tu veux filtrer/closer au téléphone, un peu plus lourd qu'un simple bouton de paiement si l'offre se vend très bien en self-service. Rien à changer si c'est un choix assumé : la page est construite pour ce modèle.
