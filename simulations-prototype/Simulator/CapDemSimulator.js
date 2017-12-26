'use strict';

const Simulator = require('./Simulator');

const CapitalistDemocracy = require('../Government/CapitalistDemocracy');
const Population = require('../Population/Population');
/*

simulator = capitalist democracy simulator
	government = capitalist democracy
		power structure = distributed formal invisible fluid
		power source = expert many
			power basis profile = mainly expertise
		power ideology = libertarian republicanism
			sociopolitical ideology = republicanism
				system of law = mainly civil
			socioeconomic ideology = libertarianism
*/

class CapDemSimulator extends Simulator {
	constructor(name) {
		super(name);
		this._government = new CapitalistDemocracy();
		this._population = new Population(5);
		this._population.generatePeople(5);
	}
}

module.exports = CapDemSimulator;