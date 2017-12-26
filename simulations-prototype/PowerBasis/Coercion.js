'use strict';

const PowerBasis = require('./PowerBasis');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

/* Coercive power uses the threat of force to gain compliance from another.
Force may include physical, social, emotional, political, or economic means.
Coercion is not always recognized by the target of influence.[8] This type of
power is based upon the idea of coercion. The main idea behind this concept
is that someone is forced to do something that he/she does not desire to do.
The main goal of coercion is compliance. Coercive power's influence is socially
dependent on how the target relates to the change being desired by the influence
agent.[9] Furthermore, a person would have to be consistently watched by the
influencing agent in order for the change to remain in effect.[9]
*/

class Coercion extends PowerBasis {
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

module.exports = Coercion;