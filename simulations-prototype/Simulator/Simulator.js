'use strict';

const Government = require('../Government/Government');
const Population = require('../Population/Population');

/*
https://en.wikipedia.org/wiki/World3
The model consisted of several interacting parts. Each of these dealt with a different system
of the model. The main systems were:
	the food system, dealing with agriculture and food production
	the industrial system
    the population system
    the non-renewable resources system
    the pollution system
-------------
simulator
	government
		power structure
		power source
			power basis profile
				power basis
		power ideology
			sociopolitical ideology
				system of law
			socioeconomic ideology
*/

class Simulator {
	constructor(name) {
		this._name = name;
		this._mapWidth = 100;
		this._population = new Population();
		this._government = new Government();
	}
	get name() {
		return this._name;
	}
	get population() {
		return this._population;
	}
	get mapWidth() {
		return this._mapWidth;
	}
	get government() {
		return this._government;
	}
}

module.exports = Simulator;