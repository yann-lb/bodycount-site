# Site public de BodyCount

Deux pages statiques, servies par GitHub Pages depuis le dépôt public
`bodycount-site` : l'accueil et la politique de confidentialité, dont le Play
Store exige une adresse publique.

- Source : ce dossier, dans le dépôt principal (privé).
- Publication : `scripts/publish-site.sh`, qui pousse l'historique de `site/`
  vers `bodycount-site` (`git subtree`).
- Adresses : `https://yann-lb.github.io/bodycount-site/` et
  `https://yann-lb.github.io/bodycount-site/confidentialite/`.

La politique existe aussi en Markdown dans
`docs/politique-de-confidentialite.md` : les deux se modifient ensemble.
