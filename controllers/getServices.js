var services = require('../data/services.json'),
	legal_service = require('../data/legal-service.json');
	alliances_partnerships = require('../data/alliances-partnerships.json');
	capital_investments = require ('../data/capital-investments.json');
	due_diligence = require ('../data/due-diligence.json');
	litigation_management = require('../data/litigation-management.json');
	employement_agreements = require('../data/employement-agreements.json');

function getServices (req, res, next) {
	return res.status(200).json(services);
}
function getLegalService (req, res, next) {
	return res.status(200).json(legal_service);
}
function getAlliancesPartnerships (req, res, next){
	return res.status(200).json(alliances_partnerships);
}
function getCapitalInvestments (req, res, next){
	return res.status(200).json(capital_investments);
}
function getDueDiligence (res, req, next){
	return res.status(200).json(due_diligence);
}
function getLitigationManagement (req, res, next){
	return res.status(200).json(litigation_menagement);
}
function getEmployementAgreements (req, res, next){
	return res.status(200).json(employement_agreements);
}

module.exports = {
	getServices: getServices,
	getLegalService: getLegalService,
	getAlliancesPartnerships: getAlliancesPartnerships,
	getCapitalInvestments: getCapitalInvestments,
	getDueDiligence: getDueDiligence,
	getLitigationManagement: getLitigationManagement,
	getEmployementAgreements: getEmployementAgreements
};