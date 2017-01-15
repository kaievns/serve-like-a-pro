const { expect } = require('chai');
const mocha = require('mocha');
const coMocha = require('co-mocha');
const doubleagent = require('doubleagent');
const serve = require('../src');

coMocha(mocha);

const app = serve();

exports.app = doubleagent(app);
exports.expect = expect;
