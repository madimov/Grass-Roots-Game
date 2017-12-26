'use strict';

const PowerBasis = require('./PowerBasis');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

/* Reward power is based on the right of some to offer or deny tangible, social,
emotional, or spiritual rewards to others for doing what is wanted or expected
of them. Some examples of reward power (positive reward) are: (a) a child is
given a dollar for earning better grades; (b) a student is admitted into an
honor society for excellent effort; (c) a retiree is praised and feted for
lengthy service at a retirement party; and (d) New York firefighters were
heralded as heroes for their acts on 9-11-01.
*/

class Reward extends PowerBasis {
	constructor(name) {
		super(name);
		this._changeSociallyDependent = true;
		this._surveillanceImportant = true;
		this._personal = 0;
		this._impersonal = 0;	
	}
	get personal() {
		return this._personal;
	}
	get impersonal() {
		return this._impersonal;
	}
}

module.exports = Reward;