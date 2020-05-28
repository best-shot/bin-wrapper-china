#!/usr/bin/env node

'use strict';

const {
	china: {ENVS}
} = require('binary-mirror-config');

Object.entries(ENVS).forEach(([key, value]) => {
	process.env[key] = value;
});
