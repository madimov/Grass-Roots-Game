'use strict'

const random = require('lodash.random');

const d = require('./debugger');
const PGP = require('./postgres-controller');
const Simulator = require('./Simulator/Simulator');
const CapDemSimulator = require('./Simulator/CapDemSimulator');

let simCtrl = {};

module.exports = {
	capDemSimulator: {},
	initializeCapDemSimulator: function() {
		this.capDemSimulator = new CapDemSimulator('CDS1');
		// console.log(this.capDemSimulator.name);
	}
}
