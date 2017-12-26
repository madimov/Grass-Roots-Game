'use strict';

const PowerBasis = require('./PowerBasis');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

/* Expert power is based on what one knows, experience, and special skills or
talents.[8] Expertise can be demonstrated by reputation, credentials certifying
expertise, and actions. The effectiveness and impacts of the Expert power base may
be negative or positive.[4] According to Raven, there will be more use of Expert
power if the motive is a need for achievement.[2] The ability to administer to
another information, knowledge or expertise.[20] (Example: Doctors, lawyers).
As a consequence of the expert power or knowledge, a leader is able to convince
his subordinates to trust him. The expertise does not have to be genuine – it is
the perception of expertise that provides the power base. When individuals perceive
or assume that a person possesses superior skills or abilities, they award power
to that person.[1]
*/

class Expertise extends PowerBasis {
	constructor(name) {
		super(name);
		this._changeSociallyDependent = true;
		this._surveillanceImportant = false;
		this._positive = 0;
		this._negative = 0;	
	}
	get positive() {
		return this._positive;
	}
	get negative() {
		return this._negative;
	}
}

module.exports = Expertise;