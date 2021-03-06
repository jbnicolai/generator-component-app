/*global describe, beforeEach, it*/
'use strict';
var assert = require('assert');

describe('component-app generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });
});

describe('component-app:component generator', function () {
  it('can be imported without blowing up', function () {
    var component = require('../component');
    assert(component !== undefined);
  });
});
