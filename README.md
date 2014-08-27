travis-ci-meteor-packages
=========================

### [Travis CI support for Meteor (Smart) Packages](http://meteorhacks.com/travis-ci-support-for-meteor-packages.html)

Add following file to your meteor package as `.travis.yml`

    language: node_js
    node_js:
      - "0.10"
    before_install:
      - "curl -L http://git.io/ejPSng | /bin/sh"

Login to [https://travis-ci.org](https://travis-ci.org) with Github and navigate to [https://travis-ci.org/profile](https://travis-ci.org/profile)

Enable travis support for your project listed there.

![Meteor Cluster - Travis Support](http://i.imgur.com/JY9o3xm.png)

You can configure tests with two environment variables:
 * `WORKING_DIR` -- working directory to run `mrt` from
 * `PACKAGES` -- list of package names or directories to test, separated by `;`, by default `./`; specfiy empty string to test all packages
 * `TEST_COMMAND` -- you can specify a custom command to run, instead of default `mrt`, it gets all the arguments `mrt` would; this is useful if you want to do some more pre- or post-processing
 * `METEOR_RELEASE` -- you can specify the meteor release to run the tests with.

See [here](http://meteorhacks.com/travis-ci-support-for-meteor-packages.html) for more information
