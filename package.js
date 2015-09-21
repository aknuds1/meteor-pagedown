'use strict';

Package.describe({
  summary: 'PageDown Markdown editor',
  version: '1.1.1',
  name: 'aknudsen:pagedown',
  git: 'https://github.com/aknuds1/meteor-pagedown',
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.export('Markdown', 'browser');
  api.addFiles([
    'Markdown.Editor.js',
    'Markdown.Converter.js',
    'Markdown.Sanitizer.js',
  ], 'browser');
});
