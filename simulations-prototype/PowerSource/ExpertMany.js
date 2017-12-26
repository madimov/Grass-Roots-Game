'use strict';

const PowerSource = require('./PowerSource');
const MainlyExpertise = require('../PowerBasisProfile/MainlyExpertise');

// https://en.wikipedia.org/wiki/Government

class ExpertMany extends PowerSource {
	constructor() {
		super();
		this._name = 'expertMany'; // e.g. Coercion-One? combine strongest power basis and power focus?
		
		// maybe the sum of the power bases below should equal 1, allowing a pie-chart style profile
		this._powerBasisProfile = new MainlyExpertise();

		this._powerOfMany = true; // democracy
	}
}

module.exports = ExpertMany;
