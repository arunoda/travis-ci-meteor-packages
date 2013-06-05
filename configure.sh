#!/bin/sh

#configuring the system
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/Makefile
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/start_test.js

#installing meteor
git clone https://github.com/meteor/meteor.git ./meteor
cd ./meteor
git checkout release/0.6.3.1
cd ..
