'use strict';

const PowerBasisProfile = require('../PowerBasisProfile/PowerBasisProfile');

// https://en.wikipedia.org/wiki/Government

class PowerSource {
	constructor() {
		this._name = ''; // e.g. Coercion-Autocracy? combine strongest power basis and power focus?
		
		// maybe the sum of the power bases below should equal 1, allowing a pie-chart style profile
		this._powerBasisProfile = new PowerBasisProfile();

		this._powerOfMany = false; // democracy
		this._powerOfFew = false; // oligarchy
		this._powerOfOne = false; // autocracy
		this._powerOfGod = false; // theocracy
		this._powerOfNone = false; // anarchy
		
	}
	get name() {
		return this._name;
	}
	get powerBasisProfile() {
		return this._powerBasisProfile;
	}
	get powerOfMany() {
		return this._powerOfMany;
	}
	get powerOfFew() {
		return this._powerOfFew;
	}
	get powerOfOne() {
		return this._powerOfOne;
	}
	get powerOfGod() {
		return this._powerOfGod;
	}
	get powerOfNone() {
		return this._powerOfNone;
	}
}

module.exports = PowerSource;