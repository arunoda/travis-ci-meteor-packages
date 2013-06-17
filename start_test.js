#!/usr/bin/env node
var spawn = require('child_process').spawn;

var packageDir = process.env.PACKAGE_DIR || './';
var meteor = spawn('mrt', ['test-packages', '--driver-package', 'test-in-console', '-p', 10015, './'], {cwd: packageDir});
meteor.stdout.pipe(process.stdout);
meteor.stderr.pipe(process.stderr);

meteor.stdout.on('data', function startTesting(data) {
  var data = data.toString();
  if(data.match(/10015/)) {
    console.log('starting testing...');
    meteor.stdout.removeListener('data', startTesting);
    runTestSuite();
  } 
});

function runTestSuite() {
  process.env.URL = "http://localhost:10015/"
  var phantomjs = spawn('phantomjs', ['./phantom_runner.js']);
  phantomjs.stdout.pipe(process.stdout);
  phantomjs.stderr.pipe(process.stderr);

  phantomjs.on('close', function(code) {
    meteor.kill('SIGQUIT');
    process.exit(code);
  });
}