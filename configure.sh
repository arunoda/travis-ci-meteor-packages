#!/bin/sh

#configuring the system
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/Makefile
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/start_test.js
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/phantom_runner.js

#install meteor
curl https://install.meteor.com | /bin/sh
