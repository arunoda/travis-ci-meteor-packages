#!/bin/sh

#configuring the system
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/Makefile
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/start_test.js
wget https://raw.github.com/arunoda/travis-ci-meteor-packages/master/phantom_runner.js

# -- mrt will take care of this
# #installing meteor
# git clone https://github.com/meteor/meteor.git ./meteor
# cd ./meteor
# git checkout release/0.6.3.1
# cd ..

#installing meteorite
npm install -g meteorite
