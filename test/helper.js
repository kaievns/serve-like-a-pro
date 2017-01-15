const { expect } = require('chai');
const mocha = require('mocha');
const coMocha = require('co-mocha');
const doubleagent = require('doubleagent');
const { setup } = require('../src');

coMocha(mocha);

exports.expect = expect;
exports.app = doubleagent(setup({
  root: `${__dirname}/site`
}));
