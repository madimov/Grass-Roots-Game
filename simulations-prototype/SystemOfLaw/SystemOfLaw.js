'use strict';

// https://en.wikipedia.org/wiki/List_of_national_legal_systems
// https://en.wikipedia.org/wiki/Civil_law_(legal_system)

/*
 - https://en.wikipedia.org/wiki/List_of_national_legal_systems
The contemporary legal systems of the world are generally based on one of
four basic systems: civil law, common law, statutory law, religious law or
combinations of these. However, the legal system of each country is shaped
by its unique history and so incorporates individual variations.[1]

Both Civil (also known as Roman) and Common law systems can be considered
the most widespread in the world, Civil law because it is the most widespread
by landmass, and Common law because it is employed by the greatest number of people.
*/
class SystemOfLaw {
	constructor() {
		this._name = '';
		// maybe the sum of the law types below should equal 1, allowing a pie-chart style profile
		this._civil = 0;
		/*
		Civil law, civilian law, or Roman law is a legal system originating in Europe,
		intellectualized within the framework of late Roman law, and whose most
		prevalent feature is that its core principles are codified into a referable
		system which serves as the primary source of law.
		*/
		this._common = 0;
		/*
		In common law systems, the intellectual framework comes from judge-made
		decisional law which gives precedential authority to prior court decisions
		on the principle that it is unfair to treat similar facts differently on
		different occasions (doctrine of judicial precedent, or stare decisis).
		*/
		this._religious = 0;
		/*
		Religious law refers to the notion of a religious system or document being
		used as a legal source, though the methodology used varies. For example,
		the use of Jewish and Halakha for public law has a static and unalterable
		quality, precluding amendment through legislative acts of government or
		development through judicial precedent; Christian Canon law is more similar
		to civil law in its use of codes; and Islamic Sharia law (and Fiqh
		jurisprudence) is based on legal precedent and reasoning by analogy (Qiyas),
		and is thus considered similar to common law.
		*/
	}
	get name() {
		return this._name;
	}
	get socioPolitical() {
		return this.civilLaw;
	}
	get socioEconomic() {
		return this._socioEconomic;
	}
	get geoCultural() {
		return this._geoCultural;
	}
}

module.exports = SystemOfLaw;