travis-ci-meteor-packages
=========================

### [Travis CI support for Meteor (Smart) Packages](http://meteorhacks.com/travis-ci-support-for-meteor-packages.html)

Add following file to your meteor package as `.travis.yml`

```yaml
## Add this file to your meteor package as `.travis.yml`

sudo: required
language: node_js
node_js:
  - "0.10"
  
before_install:
  - "curl -L https://git.io/ejPSng | /bin/sh"

env:
  - CXX=g++-4.8
addons:
  apt:
    sources:
      - ubuntu-toolchain-r-test
    packages:
      - g++-4.8
```

**UPDATE** (2015/03/31) : Please note that the latest version of .travis.yaml now includes "sudo: required" to cope with new permissions constraints in Travis virtual machines.

**UPDATE** (2016/08/16) : The latest version of .travis.yaml now includes a compiler to compile the bcrypt NPM module.

Login to [https://travis-ci.org](https://travis-ci.org) with Github and navigate to [https://travis-ci.org/profile](https://travis-ci.org/profile)

Enable travis support for your project listed there.

![Meteor Cluster - Travis Support](http://i.imgur.com/JY9o3xm.png)

You can configure tests with two environment variables:
 * `WORKING_DIR` -- working directory to run `meteor` from
 * `PACKAGES` -- list of package names or directories to test, separated by `;`, by default `./`; specfiy empty string to test all packages
 * `TEST_COMMAND` -- you can specify a custom command to run, instead of default `meteor`, it gets all the arguments `meteor` would; this is useful if you want to do some more pre- or post-processing
 * `METEOR_RELEASE` -- you can specify the meteor release to run the tests with.
 * `SETTINGS_FILE` -- you can specify a JSON file to load into `Meteor.settings` on the server

If you would like to specify more arguments (such as `--settings`), create a simple shell script and pass the path to `TEST_COMMAND`.

Create the following `travis.sh` (name not important):
```bash
#!/bin/sh
meteor "$@" --settings test/settings.travis.json
```
Add the following environment variable to your `.travis.yml`:
```yaml
env: TEST_COMMAND=./travis.sh
```

Be sure to set the executable flag on your new script:
```bash
$ chmod +x travis.sh
```

See [here](http://meteorhacks.com/travis-ci-support-for-meteor-packages.html) for more information
