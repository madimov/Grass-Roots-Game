'use strict';

const Government = require('./Government');

const DistributedFormalInvisibleFluid = require('../PowerStructure/DistributedFormalInvisibleFluid');
const ExpertMany = require('../PowerSource/ExpertMany');
const LibertarianRepublicanism = require('../PowerIdeology/LibertarianRepublicanism');

// https://en.wikipedia.org/wiki/List_of_forms_of_government

class CapitalistDemocracy extends Government {
	constructor() {
		super();
		this._name = 'capitalistDemocracy';
		this._powerStructure = new DistributedFormalInvisibleFluid();
		this._powerSource = new ExpertMany();
		this._powerIdeology = new LibertarianRepublicanism();
	}
}

module.exports = CapitalistDemocracy;