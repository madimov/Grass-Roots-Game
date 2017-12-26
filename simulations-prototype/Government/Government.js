'use strict';

const PowerStructure = require('../PowerStructure/PowerStructure');
const PowerSource = require('../PowerSource/PowerSource');
const PowerIdeology = require('../PowerIdeology/PowerIdeology');

// https://en.wikipedia.org/wiki/List_of_forms_of_government

class Government {
	constructor() {
		this._name = '';
		this._powerStructure = new PowerStructure();
		this._powerSource = new PowerSource();
		this._powerIdeology = new PowerIdeology();
	}
	get name() {
		return this._name;
	}
	get powerStructure() {
		return this._powerStructure;
	}
	get powerSource() {
		return this._powerSource;
	}
	get powerIdeology() {
		return this._powerIdeology;
	}
}

module.exports = Government;