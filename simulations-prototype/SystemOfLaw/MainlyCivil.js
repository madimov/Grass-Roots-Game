'use strict';

const SystemOfLaw = require('./SystemOfLaw');

class MainlyCivil extends SystemOfLaw {
	constructor() {
		super();
		this._name = 'mainlyCivil';
		this._civil = 0.8;
		this._common = 0.1;
		this._religious = 0.1;
	}
}

module.exports = MainlyCivil;