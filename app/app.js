const bots = require( './bots' );
const config = require( '../UserSettings/config' );
const logger = require( './logger' );
const offerChecker = require( './offerChecker' )
const settings = config.settings;
const botsSettings = config.bots;

logger.setSettings( settings.logger );
offerChecker.setSettings( settings.admins, settings.acceptDonations );

bots.createBots( botsSettings, settings.language );