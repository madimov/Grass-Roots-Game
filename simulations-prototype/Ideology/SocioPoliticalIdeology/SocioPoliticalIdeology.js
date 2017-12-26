'use strict';

const Ideology = require('../Ideology');
const SystemOfLaw = require('../../SystemOfLaw/SystemOfLaw');

// https://en.wikipedia.org/wiki/Government
// https://www.quora.com/Is-the-possibilities-of-categories-of-political-ideologies-finite-or-infinite?share=1
// http://www.discourses.org/OldBooks/Teun%20A%20van%20Dijk%20-%20Ideology.pdf 		[page 78 of PDF, page 70 of text]
// http://4freedoms.com/group/admin/forum/topics/8-characteristics-of-a-political-ideology

/*
http://www.discourses.org/OldBooks/Teun%20A%20van%20Dijk%20-%20Ideology.pdf 		[page 78 of PDF, page 70 of text]

Membership:
	Who are we? Where are wé from? What do we look like? Who belongs to us?
	Who can become a member of our group? 
Activities:
	What do we do? What is expected of us? Why are we here? 
Goals:
	Why do we do this? What do we want to realize? 
Values/norms:
	What are our main values? How do we evaluate ourselves and others? 
	What should (not) be done? 
Position and group-relations:
	What is our social position? Who are our enemies, our opponents?
	Who are like us, and who are different? 
Resources:
	What are the essential social resources that our group has or needs to have? 
--------------------
http://4freedoms.com/group/admin/forum/topics/8-characteristics-of-a-political-ideology

An ideology is identified as political, as it acquires its own:
 - Representation by Political Party
 - System of Government: with a hierarchical delegation of control
 - System of Law: which at least covers criminal and civil acts and statements
 - Command & Control Centres:
 	normally large and permanent, from which the organisation is able to exert control
 	over the people and the surrounding territory. An entire network of these may be
 	used to control the whole country.
 - Recognisable Dress Code or Insignia:
 	by this means members of the group can recognise each other in any location,
 	and act together with greater force than disparate individuals 
 - Finance and Tax System: controls the economy and extracts revenue for the ideology
 - Indoctrination System: to inculcate children and make new converts.

*/

class SocioPoliticalIdeology extends Ideology {
	constructor() {
		super();
		// for now, these seem enough:
		this._goals = []; // how society should be organized
		this._methods = []; // the most appropriate way to achieve these goals
		this._membershipCriteria = []; // personality traits? social position?
		this._requiredSocialResources = [];
		this._representationByPoliticalParty = false;
		this._systemOfLaw = new SystemOfLaw();
		this._recognizableDressCodeOrInsignia = false;
		this._indoctrinationSystem = false; // 
	}
	get goals() {
		return this._goals;
	}
	get methods() {
		return this._methods;
	}
	get membershipCriteria() {
		return this._membershipCriteria;
	}
	get requiredSocialResources() {
		return this._requiredResources;
	}
	get representationByPoliticalParty() {
		return this._representationByPoliticalParty;
	}
	get systemOfLaw() {
		return this._systemOfLaw;
	}
	get recognizableDressCodeOrInsignia() {
		return this._recognizableDressCodeOrInsignia;
	}
	get indoctrinationSystem() {
		return this._indoctrinationSystem;
	}
}

module.exports = SocioPoliticalIdeology;