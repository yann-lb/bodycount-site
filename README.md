# Site public de BodyCount

Pages statiques, servies par GitHub Pages depuis le dépôt public
`bodycount-site` : l'accueil, la page Tester et la politique de
confidentialité, dont le Play Store exige une adresse publique. Chacune existe
en français et en anglais.

- Source : ce dossier, dans le dépôt principal (privé).
- Publication : `scripts/publish-site.sh`, qui pousse l'historique de `site/`
  vers `bodycount-site` (`git subtree`).
- Adresses : `https://yann-lb.github.io/bodycount-site/` (accueil),
  `testeurs/` et `confidentialite/` ; en anglais sous `en/` : `en/`,
  `en/testers/` et `en/privacy/`.

## Deux langues

| Français | Anglais |
|---|---|
| `index.html` | `en/index.html` |
| `testeurs/index.html` | `en/testers/index.html` |
| `confidentialite/index.html` | `en/privacy/index.html` |

Une page modifiée se modifie dans les deux langues. Chaque page annonce sa
jumelle (`<link rel="alternate" hreflang>`) et porte un bouton FR / EN dans sa
navigation. `lang.js` envoie vers l'anglais, à la première visite, un
navigateur qui ne demande le français nulle part ; un clic sur le bouton est
ensuite retenu dans le navigateur.

La politique anglaise est une traduction : la version française fait foi, et
la page anglaise le dit.

Le formulaire d'inscription des testeurs est encore en français sur la page
anglaise : quand sa version anglaise existera, remplacer le lien dans
`en/testers/index.html` et retirer la mention « The form is in French for
now ».

La politique existe aussi en Markdown dans
`docs/politique-de-confidentialite.md` : les deux se modifient ensemble.
