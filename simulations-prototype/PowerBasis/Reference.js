'use strict';

const PowerBasis = require('./PowerBasis');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

/* Referent power is rooted in the affiliations we make and/or the groups and
organizations we belong to.[8] Our affiliation with a group and the beliefs of
the group are shared to some degree. As Referent power emphasizes similarity,
respect for an agent of influence's superiority may be undermined by a target
of influence.[2] Use of this power base and its outcomes may be negative or
positive.[4] An agent for change motivated with a strong need for affiliation
and concern of likeability will prefer this power base and will influence their
leadership style.[2] Ingratiation or flattery and sense of community may be used
by an agent of influence to enhance their influence.[2]
Examples of referent power include: (a) each of the last seven White House press
secretaries have been paid handsomely for their memoirs relating to their presence
at the seat of government; (b) Mrs. Hillary Clinton gained political capital by
her marriage to the President; (c) Reverend Pat Robertson lost a bid for the
Republican Party's nomination for President due, in significant part, to his
religious affiliation; and (4) national firefighters have received vocational
acclaim due to the association with the heroic NYC firefighters. Some pitfalls
can occur related to referent assumptions; these include: (a) guilt or glory by
association where little or no true tie is established; (b) associative traits
tend to linger long after real association ends; (c) some individuals tend to pay
dearly for associates' misdeeds or terrible reputations.
*/

class Reference extends PowerBasis {
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

module.exports = Reference;