Package.describe({
  name: 'mpowaga:increment',
  summary: 'Incremental subscriptions',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
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