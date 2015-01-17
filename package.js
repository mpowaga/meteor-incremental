Package.describe({
  name: 'mpowaga:incremental',
  summary: 'Incremental subscriptions',
  version: '0.0.1',
  git: 'https://github.com/mpowaga/meteor-incremental'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use([
    'underscore'
  ], 'server');

  api.addFiles([
    'incremental.js'
  ], 'server');

  api.export('Incremental');
});