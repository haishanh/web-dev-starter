#!/usr/bin/env node
'use strict';

const path = require('path');
const prog = require('commander');
const pkg = require('./package.json');

prog
  .version(pkg.version)
  .option('-p, --port <num>', 'Port, default to 3000', parseInt)
  .option('-t, --type <type>', 'Type, normal or react')
  .option('-c, --config <file>', 'config filename')
  .option('-b, --base <dir>', 'content serving base directory')
  // .option('-s, --src <dir>', 'Source directory')
  // .option('-d, --public <dir>', 'Public directory')
  // .option('-l, --listen <host/ip>', 'IP to listen to, default to localhost')
  .parse(process.argv);


if (!prog.base) {
  console.log('\n  Error: "-b, --base" is required\n\n  --');
  prog.outputHelp();
  process.exit(-1);
}

// try populate defaults
const { base, type = 'normal', port = 3000, config:_configFile = 'webpack.config.js' } = prog;
const configFile = path.resolve(_configFile);
const config = require(configFile);
const contentBase = path.resolve(base); // check 
const options = { config, contentBase, type, port };

if (type === 'normal') require('./webpack/server').run(options);
