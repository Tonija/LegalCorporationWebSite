var route = require('express')();
var services = require('../controllers/getServices.js').getServices;
var legalService = require('../controllers/getServices.js').getLegalService;
var alliancesPartnerships = require('../controllers/getServices.js').getAlliancesPartnerships;
var capitalInvestments = require('../controllers/getServices.js').getCapitalInvestments;
var dueDiligence = require ('../controllers/getServices.js').getDueDiligence;
var litigationManagement = require('../controllers/getServices.js').getLitigationManagement;
var employementAgreements = require ('../controllers/getServices.js').getEmployementAgreements;

route.get('/services', services); // data/services
route.get('/legal-service', legalService); // data/legal-services
route.get('/alliances-partnerships', alliancesPartnerships);
route.get('/capital-investments', capitalInvestments);
route.get('due-diligence', dueDiligence);
route.get('/litigation-menagement', litigationManagement);
route.get('/employement-agreements', employementAgreements);

module.exports = route;