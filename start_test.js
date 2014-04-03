#!/usr/bin/env node
var spawn = require('child_process').spawn;

var workingDir = process.env.WORKING_DIR || process.env.PACKAGE_DIR || './';
var args = ['test-packages', '--once', '--driver-package', 'test-in-console', '-p', 10015];
if (process.env.PRODUCTION) {
  args.push('--production');
}
if (typeof process.env.PACKAGES === 'undefined') {
  args.push('./');
}
else if (process.env.PACKAGES !== '') {
  args = args.concat(process.env.PACKAGES.split(';'));
}
var meteor = spawn('mrt', args, {cwd: workingDir});
meteor.stdout.pipe(process.stdout);
meteor.stderr.pipe(process.stderr);
meteor.on('close', function (code) {
  console.log('mrt exited with code ' + code);
  process.exit(code);
});

meteor.stdout.on('data', function startTesting(data) {
  var data = data.toString();
  if(data.match(/10015|test-in-console listening/)) {
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
