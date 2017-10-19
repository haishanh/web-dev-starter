'use strict';

const test = require('ava');
const meModulePat = /\/webpack\/webpack\.common\.js$/;

test.beforeEach(t => {
  Object.keys(require.cache).forEach(function(module) {
    if (meModulePat.test(require.cache[module].filename)) {
      delete require.cache[module];
    }
  });
});

test('non-prod config snapshot', t => {
  process.env.NODE_ENV === 'test';
  const config = require('.');
  t.snapshot(config);
});

test('prod config snapshot', t => {
  process.env.NODE_ENV === 'production';
  const config = require('.');
  t.snapshot(config);
});
