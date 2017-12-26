'use strict';

// https://en.wikipedia.org/wiki/Big_Five_personality_traits

class Personality {
	constructor() {
		
		// maybe they can sum to 1, pie-chart style profile
		this._openness = 0.2;
		this._conscientiousness = 0.2;
		this._extraversion = 0.2;
		this._agreeableness = 0.2;
		this._neuroticism = 0.2;
		
	}
	get name() {
		return this._name;
	}
	get openness() {
		return this._openness;
	}
	get conscientiousness() {
		return this._conscientiousness;
	}
	get extraversion() {
		return this._extraversion;
	}
	get agreeableness() {
		return this._agreeableness;
	}
	get neuroticism() {
		return this._neuroticism;
	}
}

module.exports = Personality;