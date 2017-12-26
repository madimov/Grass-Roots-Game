'use strict'; 

// https://en.wikipedia.org/wiki/Government
// https://en.wikipedia.org/wiki/Systematic_ideology

/*
In his book, Beyond Politics, George Walford seeks to analyse ideologies on
the basis of its adherents' surface behaviors, their underlying sentiments
and assumptions ("ethos"), and underlying cognitions ("eidos"). Of particular
interest to him are a single group, the non-politicals, and five major
political ideologies, conservatism, liberalism, socialism, communism, and
anarchism, which can be listed as a series, with each seeking to "repress"
its predecessor. He forms a series of hypotheses about the nature of those
six ideologies, observing that they may be gauged upon different dimensions:
according to relative size and political influence of its adherents, their
relative reliance upon theory over practice, and the degree to which they
sought change. He postulates that the non-politicals have the greatest
influence and least interest in theory, while anarchists exhibit the least
influence and greatest interest in theory, with the rest having mixed degrees
of those properties.

He also formulates that each is relative to certain ideological ethos:
a) (short-term) expediency,
b) (traditional) principles,
c) precision,
d) (fundamental) reform,
e) revolution, and
e) repudiation.

By his formulations, historical change, development of technology, and
development of more complicated social relations can be explained as occurring
in stages along this series.

1) For Walford, all societies historically begin in a state where a mass of
individuals engage in expediency at the hunter-gatherer level. This state of
affairs is characterized by short-term individual economic behavior and
collective political action.
2) Societies grow to have more advanced and secure political systems at the
same time that they make better use of agricultural technology with more
long-term goals in mind. In the process, economic behavior becomes more and
more collectivistic. From then on, the societies engage in wars, and conquer.
Empires grow, and create obedience with the mask of traditional principles.
3) Finally, societies enter a stage where principles espoused actually begin
to be followed, enacted, and made more precise. Similarly, economic production
becomes more bureaucratic and rationally goal-oriented.
4) The remaining three forms of ethos -- reform, revolution, and repudiation—
are, when taken together, seen to compose the envisioned fourth stage in
historical development.

*/

class Ideology {
	constructor() {
		this._name = '';
		this._sizeAndInfluenceOfAdherents = 0; // float from 0 to 1, with 1 being maximum relative size and influence?
		this._relianceOnTheoryOverPractice = 0; // float from 0 to 1, with 1 being maximum relative reliance on theory?
		this._degreeToWhichSeekingChange = 0; // float from 0 to 1, with 1 being maximum degree of seeking change?
	}
	get name() {
		return this._name;
	}
	get sizeAndInfluenceOfAdherents() {
		return this._sizeAndInfluenceOfAdherents;
	}
	get relianceOnTheoryOverPractice() {
		return this._relianceOnTheoryOverPractice;
	}
	get degreeToWhichSeekingChange() {
		return this._degreeToWhichSeekingChange;
	}
}

module.exports = Ideology;