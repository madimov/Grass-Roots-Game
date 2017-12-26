'use strict';

const PowerBasisProfile = require('./PowerBasisProfile');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

class MainlyExpertise extends PowerBasisProfile {
	constructor() {
		super();
		// maybe the sum of the power bases below should equal 1, allowing a pie-chart style profile

		this._coercion.strength = 0.1;
		this._reward.strength = 0.1;
		this._legitimacy.strength = 0.1;	
		this._expertise.strength = 0.5;	
		this._reference.strength = 0.1;	
		this._information.strength = 0.1;		
	}
}

module.exports = MainlyExpertise;

