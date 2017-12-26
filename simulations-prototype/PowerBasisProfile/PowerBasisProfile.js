'use strict';

const Coercion = require('../PowerBasis/Coercion');
const Reward = require('../PowerBasis/Reward');
const Legitimacy = require('../PowerBasis/Legitimacy');
const Expertise = require('../PowerBasis/Expertise');
const Reference = require('../PowerBasis/Reference');
const Information = require('../PowerBasis/Information');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

class PowerBasisProfile {
	constructor() {
		// maybe the sum of the power bases below should equal 1, allowing a pie-chart style profile

		this._coercion = {
			strength: 0,
			properties: new Coercion()
		}
		
		this._reward = {
			strength: 0,
			properties: new Reward()
		}
		
		this._legitimacy = {
			strength: 0,
			properties: new Legitimacy()
		}
		
		this._expertise = {
			strength: 0,
			properties: new Expertise()
		}
		
		this._reference = {
			strength: 0,
			properties: new Reference()
		}
		
		this._information = {
			strength: 0,
			properties: new Information()
		}
			
	}
	get name() {
		return this._name;
	}
	get coercion() {
		return this._coercion;
	}
	get reward() {
		return this._reward;
	}
	get legitimacy() {
		return this._legitimacy;
	}
	get expertise() {
		return this._expertise;
	}
	get reference() {
		return this._reference;
	}
	get information() {
		return this._information;
	}
}

module.exports = PowerBasisProfile;

