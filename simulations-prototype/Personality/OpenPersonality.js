'use strict';

// https://en.wikipedia.org/wiki/Big_Five_personality_traits

class OpenPersonality extends Personality{
	constructor() {
		super();
		
		// maybe they can sum to 1, pie-chart style profile
		this._openness = 0.6;
		this._conscientiousness = 0.1;
		this._extraversion = 0.1;
		this._agreeableness = 0.1;
		this._neuroticism = 0.1;
		
	}
}

module.exports = OpenPersonality;