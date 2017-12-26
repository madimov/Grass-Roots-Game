'use strict';

const SocioPoliticalIdeology = require('../Ideology/SocioPoliticalIdeology/SocioPoliticalIdeology');
const SocioEconomicIdeology = require('../Ideology/SocioEconomicIdeology/SocioEconomicIdeology');

// https://en.wikipedia.org/wiki/Government

class PowerIdeology {
	constructor() {
		this._name = ''; // Separatism / Federalism / Supranationalism.. these aren't right..

		this._socioPolitical = new SocioPoliticalIdeology();
		/* monarchy vs republic
		*/
		this._socioEconomic = new SocioEconomicIdeology();
		/* authoritarian vs libertarian
		*/
	}
	get name() {
		return this._name;
	}
	get socioPolitical() {
		return this._socioPolitical;
	}
	get socioEconomic() {
		return this._socioEconomic;
	}
}

module.exports = PowerIdeology;