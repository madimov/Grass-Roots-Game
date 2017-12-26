'use strict'
const assert = require('assert');
const expect = require('chai').expect;
const reqPromise = require('request-promise');
const random = require('lodash.random');

const PGP = require('../postgres-controller'); // using pg-promise
const d = require('../debugger');
const simCtrl = require('../simulation-controller');

// add integration tests over time

// write module name infront of each function name in each 'describe' section, like message-handler.handleMessage

let testTimeout = 20000;

let testCapDemSimulator = {
  name: 'CDS1'
};

describe('=======================================================================\n' + 
  '  ===========================  CAP-DEM-SIMULATOR  =======================\n' + 
  '  =======================================================================', function() {

  describe('cap-dem-simulator.initializeCapDemSimulator', function() {
    it('initializes the cap dem simulator', async function() {
      this.timeout(testTimeout);
      simCtrl.initializeCapDemSimulator();

      let result = simCtrl.capDemSimulator;
      let str = JSON.stringify(result, null, 4);
      console.log(str);

      // d.logObj(simCtrl.capDemSimulator);
      
      // let stringified = JSON.stringify(simCtrl.capDemSimulator);
      // let parsed = JSON.parse(stringified); 
      // console.log(parsed);
      assert.equal(result.name, testCapDemSimulator.name, 'simulator should be named capDemSimulator');
    });
  });
});