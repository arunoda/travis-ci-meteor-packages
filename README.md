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

See [here](http://meteorhacks.com/travis-ci-support-for-meteor-packages.html) for more information
