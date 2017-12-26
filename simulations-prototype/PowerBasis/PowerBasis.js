'use strict';

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

class PowerBasis {
	constructor() {
		// maybe the sum of the power bases below should equal 1, allowing a pie-chart style profile
		this._changeSociallyDependent = false;
		this._surveillanceImportant = false;	
	}
	get name() {
		return this._name;
	}
	get changeSociallyDependent() {
		return this._changeSociallyDependent;
	}
	get surveillanceImportant() {
		return this._surveillanceImportant;
	}
}

module.exports = PowerBasis;