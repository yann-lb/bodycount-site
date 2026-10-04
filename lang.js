/*
 * Langue du site. À la première visite d'une page française, un navigateur
 * qui ne demande le français nulle part part vers la page anglaise
 * équivalente, celle du bouton EN. Le bouton FR / EN retient ensuite le
 * choix dans le navigateur : on ne renvoie jamais quelqu'un vers une langue
 * qu'il vient de quitter. Ce choix n'est envoyé nulle part.
 *
 * Chargé dans <head> : la décision se prend avant l'affichage, la redirection
 * part dès que le document est lu — la page française n'a pas le temps de
 * s'installer.
 */
(function () {
  var KEY = 'bodycount-lang';
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-lang]');
    if (!link) return;
    try { localStorage.setItem(KEY, link.getAttribute('data-lang')); } catch (e) {}
  });

  if (saved || document.documentElement.lang !== 'fr') return;
  var wanted = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'fr'];
  for (var i = 0; i < wanted.length; i++) {
    if (/^fr\b/i.test(wanted[i])) return;
  }
  // On suit le lien du bouton EN, relatif, plutôt que l'adresse absolue du
  // <link hreflang> : la redirection marche aussi en local. Ce lien n'existe
  // qu'une fois le document lu, sans attendre les images ni les polices.
  var go = function () {
    var english = document.querySelector('a.lang[data-lang="en"]');
    if (english) location.replace(english.href + location.hash.replace('#testeurs', '#testers'));
  };
  document.addEventListener('DOMContentLoaded', go);
})();
