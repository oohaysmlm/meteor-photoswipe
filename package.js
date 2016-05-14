Package.describe({
  name: 'skehoe1989:photoswipe',
  summary: 'JavaScript gallery, no dependencies.',
  version: '1.0.0',
  git: 'https://github.com/acidsound/meteor-photoswipe.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addAssets([
    'lib/dist/default-skin/default-skin.png',
    'lib/dist/default-skin/default-skin.svg',
    'lib/dist/default-skin/preloader.gif'
  ], 'client');
  api.addFiles([
    'lib/dist/photoswipe.css',
    'lib/dist/default-skin/default-skin.css',
    'lib/dist/photoswipe.js',
    'lib/dist/photoswipe-ui-default.js'
  ], 'client');
});