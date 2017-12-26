'use strict';

const PowerBasis = require('./PowerBasis');

// https://en.wikipedia.org/wiki/French_and_Raven%27s_bases_of_power

/* Information power comes as a result of possessing knowledge that others need
or want.[8] In the age of Information technology, information power is increasingly
relevant as an abundance of information is readily available. There may be a
cost-benefit analysis by an agent of influence to determine if Information Power
or influence is the best strategy.[2] Informational influence or persuasion would
generally be favorable however it may not be best suited if timing and effort
lacks.[2] Information possessed that no one needs or wants is powerless. Information
power extends to the ability to get information not presently held such as a case
with a librarian or data base manager. Not all information is readily available;
some information is closely controlled by few people. Examples of information that
is sensitive or limits accessibility: (a) national security data; (b) personnel
information for government or business; (c) corporate trade secrets; (d) juvenile
court records; (e) many privately settled lawsuit documents; (f) Swiss bank account
owners; and (g) private phone conversations. Of course, legally obtained phone tap
warrants, spying, eavesdropping, group and group member leaks can allow others not
intended to be privy to information.[8] Possessing information is not, typically,
the vital act; it is what one can and does do or potentially can do with the
information that typically is of vital importance. Information can, and often is,
used as a weapon as in a divorce, a child custody case, business dissolution, or
in civil suits discoveries. Information has been used by some to extort action,
utterance, agreement, or settlement by others.[8]
*/	

class Information extends PowerBasis {
	constructor(name) {
		super(name);
		this._changeSociallyDependent = false;
		this._surveillanceImportant = false;
		this._direct = 0;
		this._indirect = 0;	
	}
	get direct() {
		return this._direct;
	}
	get indirect() {
		return this._indirect;
	}
}

module.exports = Information;