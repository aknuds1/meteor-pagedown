'use strict';

Package.describe({
  summary: 'PageDown Markdown editor',
  version: '1.1.1',
  name: 'aknudsen:pagedown',
  git: 'https://github.com/aknuds1/meteor-pagedown',
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.addFiles([
    'pagedown/Markdown.Converter.js',
    'pagedown/Markdown.Sanitizer.js',
    'pagedown/Markdown.Editor.js',
  ], 'client');
  api.export('Markdown', 'client');
});
