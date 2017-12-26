'use strict';

const PowerBasis = require('./PowerBasis');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

/* Legitimate power comes from an elected, selected, or appointed position of
authority and may be underpinned by social norms.[4] This power which means the
ability to administer to another certain feelings of obligation or the notion of
responsibility.[11] "Rewarding and Punishing subordinates is generally seen as a
legitimate part of the formal or appointed leadership role and most managerial
positions in work organizations carry with them, some degree of expected reward
and punishment."[13] This type of formal power relies on position in an authority
hierarchy. Occasionally, those possessing legitimate power fail to recognize they
have it, and may begin to notice others going around them to accomplish their
goals.[14] Three bases of legitimate power are cultural values, acceptance of
social structure, and designation.[7] Cultural values comprise a general basis
for legitimate power of one entity over another.[7] Such legitimacy is conferred
by others and this legitimacy can be revoked by the original granters, their
designees, or their inheritors.[8]
Legitimate power originates from a target of influence accepting the power of
the influencing agent whereas behavioral change or compliance occurs based on
target's obligation.[2] One who uses legitimate power may have a high need for
power which is their motivator to use this base for change in behavior and
influence.[2] There may be a range of legitimate power.[7]
*/

class Legitimacy extends PowerBasis {
	constructor(name) {
		super(name);
		this._changeSociallyDependent = true;
		this._surveillanceImportant = false;
		this._position = 0;
		this._reciprocity = 0;
		this._equity = 0;
		this._dependence = 0;	
	}
	get position() {
		return this._position;
	}
	get reciprocity() {
		return this._reciprocity;
	}
	get equity() {
		return this._equity;
	}
	get dependence() {
		return this._dependence;
	}
}

module.exports = Legitimacy;