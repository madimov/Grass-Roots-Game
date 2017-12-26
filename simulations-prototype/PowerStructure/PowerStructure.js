'use strict';

// https://en.wikipedia.org/wiki/Government

class PowerStructure {
	constructor() {
		// this._name = name; // Separatism / Federalism / Supranationalism.. these aren't right..

		this._distribution = 0; // float from 0 to 1, with 1 being uniform distribution?
		/* A description of a power structure would capture the way in which power 
		or authority is distributed between people within groups such as a government,
		nation, institution, organization, or a society.
		*/
		this._formality = 0; // float from 0 to 1, with 1 being complete formality?
		/* A power structure may be formal and intentionally constructed to maximize 
		values like fairness or efficiency, as in a hierarchical organization wherein
		every entity, except one, is subordinate to a single other entity. 
		Conversely, a power structure may be an informal set of roles, such as those
		found in a dominance hierarchy in which members of a social group interact, 
		often aggressively, to create a ranking system.
		*/
		this._visibility = 0; // float from 0 to 1, with 1 being total visibility?
		/* A culture that is organised in a dominance hierarchy is a dominator culture,
		the opposite of an egalitarian culture of partnership. A visible, dominant group
		or elite that holds power or authority within a power structure is often 
		referred to as being the Establishment.
		*/
		this._fluidity = 0; // float from 0 to 1, with 1 being total fluidity?
		/* Power structures are fluid, with changes occurring constantly, either slowly
		or rapidly, evolving or revolutionary, peacefully or violently.
		*/
	}
	get distribution() {
		return this._distribution;
	}
	get formality() {
		return this._formality;
	}
	get visibility() {
		return this._visibility;
	}
	get fluidity() {
		return this._fluidity;
	}
}

module.exports = PowerStructure;