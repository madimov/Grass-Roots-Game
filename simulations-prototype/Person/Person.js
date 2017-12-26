'use strict';

const Personality = require('../Personality/Personality');
const Physicality = require('../Physicality/Physicality');

class Person {
	constructor() {
		this._name = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
		//^copied from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
		
		this._personality = new Personality();

		this._physicality = new Physicality();
	}
	get name() {
		return this._name;
	}
	get personality() {
		return this._personality;
	}
	get physicality() {
		return this._physicality;
	}
}

module.exports = Person;