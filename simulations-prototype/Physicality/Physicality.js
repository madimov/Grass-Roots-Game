'use strict';

class Physicality {
	constructor() {
		
		// maybe they can sum to 1, pie-chart style profile
		this._age = 0;
		this._health = 0; // float from 0 to 1?
		
	}
	get age() {
		return this._age;
	}
	get health() {
		return this._health;
	}
}

module.exports = Physicality;