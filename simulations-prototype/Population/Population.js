'use strict';

const Person = require('../Person/Person');

class Population {
	constructor(size) {
		
		this._size = size;

		this._people = [];

		this.generatePeople = function (number) {
			for (let i = 0; i < number; i++) {
				this.people.push(new Person());
			}
		}
		
	}
	get count() {
		return this._count;
	}
	get people() {
		return this._people;
	}
}

module.exports = Population;