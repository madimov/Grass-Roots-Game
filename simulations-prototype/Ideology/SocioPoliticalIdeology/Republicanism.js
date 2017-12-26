'use strict';

const SocioPoliticalIdeology = require('./SocioPoliticalIdeology');
const MainlyCivil = require('../../SystemOfLaw/MainlyCivil');

class Republicanism extends SocioPoliticalIdeology {
	constructor() {
		super();
		this._name = 'republicanism';
		this._representationByPoliticalParty = true;
		this._systemOfLaw = new MainlyCivil();
	}
}

module.exports = Republicanism;