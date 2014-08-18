#!/bin/sh

#configuring the system
wget https://raw.github.com/marcodejongh/travis-ci-meteor-packages/v0.9.0/Makefile
wget https://raw.github.com/marcodejongh/travis-ci-meteor-packages/v0.9.0/start_test.js
wget https://raw.github.com/marcodejongh/travis-ci-meteor-packages/v0.9.0/phantom_runner.js

#install meteor
curl http://install-packaging-preview.meteor.com/ | /bin/sh
