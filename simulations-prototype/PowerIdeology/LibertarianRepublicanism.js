'use strict';

const PowerIdeology = require('./PowerIdeology');

const Republicanism = require('../Ideology/SocioPoliticalIdeology/Republicanism');
const Libertarianism = require('../Ideology/SocioEconomicIdeology/Libertarianism');

// https://en.wikipedia.org/wiki/Government

class LibertarianRepublicanism extends PowerIdeology {
	constructor() {
		super();
		this._name = 'libertarianRepublic'; // Separatism / Federalism / Supranationalism.. these aren't right..

		this._socioPolitical = new Republicanism();
		/* monarchy vs republic
		*/
		this._socioEconomic = new Libertarianism();
		/* authoritarian vs libertarian
		*/
	}
}

module.exports = LibertarianRepublicanism;