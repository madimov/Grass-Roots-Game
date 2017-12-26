'use strict';

const Ideology = require('../Ideology');

// https://en.wikipedia.org/wiki/Economic_system

/*

There are multiple components to economic systems. Decision-making structures of an
economy determine the use of economic inputs (the factors of production), distribution
of output, the level of centralization in decision-making, and who makes these decisions.
Decisions might be carried out by industrial councils, by a government agency, or by
private owners.

An economic system is a system of production, resource allocation, exchange, and
distribution of goods and services in a society or a given geographic area.
In one view, every economic system represents an attempt to solve three fundamental
and interdependent problems:
	- What goods and services shall be produced, and in what quantities?
	- How shall goods and services be produced? That is, by whom and with what resources
	and technologies?
	- For whom shall goods and services be produced? That is, who is to enjoy the
	benefits of the goods and services and how is the total product to be distributed
	among individuals and groups in the society?[5]

Thus every economy is a system that allocates resources for exchange, production,
distribution, and consumption. The system is stabilized through a combination of threat
and trust, which are the outcome of institutional arrangements.[6] An economic system
possesses the following institutions:

	Methods of control over the factors or means of production:
		this may include ownership of, or property rights to, the means of production
		and therefore may give rise to claims to the proceeds from production. The
		means of production may be owned privately, by the state, by those who use
		them or be held in common.
    A decision-making system:
    	this determines who is eligible to make decisions over economic activities.
    	Economic agents with decision-making powers can enter into binding contracts
    	with one another.
    A coordination mechanism:
    	this determines how information is obtained and used in decision-making.
    	The two dominant forms of coordination are planning and markets; planning can
    	be either decentralized or centralized, and the two coordination mechanisms
    	are not mutually exclusive and often co-exist.[7]
    An incentive system:
    	this induces and motivates economic agents to engage in productive activities.
    	It can be based on either material reward (compensation or self-interest) or
    	moral suasion (for instance, social prestige or through a democratic
    	decision-making process that binds those involved). The incentive system may
    	encourage specialization and the division of labor.
    Organizational form:
    	there are two basic forms of organization: actors and regulators. Economic
    	actors include households, work gangs and production teams, firms,
    	joint-ventures and cartels. Economically regulative organizations are
    	represented by the state and market authorities; the latter may be private
    	or public entities.
    A distribution system:
    	this allocates the proceeds from productive activity, which is distributed
    	as income among the economic organizations, individuals and groups within
    	society, such as property owners, workers, and non-workers, or the state (from taxes).
    A public choice mechanism for law-making, establishing rules, norms and
    standards and levying taxes:
    	Usually, this is the responsibility of the state but other means of collective
    	decision-making are possible, such as chambers of commerce or workers’ councils.[8]


*/

class SocioEconomicIdeology extends Ideology {
	constructor() {
		super();
		// for now, these seem enough:
		this._methodsOfControlOverMeansOfProduction = [];
		this._decisionMakingSystem = ''; // new DecisionMakingSystem();
		this._coordinationMechanism = ''; // new CoordinationMechanism();
		this._incentiveSystem = ''; // new IncentiveSystem();
		this._organizationalForm = ''; // new OrganizationalForm();
		this._distributionSystem = ''; // new DistributionSystem();
		this._publicChoiceMechanismForEstablishingRules = ''; // new PublicChoiceMechanismForEstablishingRules();
	}
	get methodsOfControlOverMeansOfProduction() {
		return this._methodsOfControlOverMeansOfProduction;
	}
	get decisionMakingSystem() {
		return this._decisionMakingSystem;
	}
	get coordinationMechanism() {
		return this._coordinationMechanism;
	}
	get incentiveSystem() {
		return this._incentiveSystem;
	}
	get organizationalForm() {
		return this._organizationalForm;
	}
	get distributionSystem() {
		return this._distributionSystem;
	}
	get publicChoiceMechanismForEstablishingRules() {
		return this._publicChoiceMechanismForEstablishingRules;
	}
}

module.exports = SocioEconomicIdeology;