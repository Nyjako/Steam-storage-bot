const SteamUser = require( 'steam-user' );
const Steamcommunity = require( 'steamcommunity' );
const SteamTradeofferManager = require( 'steam-tradeoffer-manager' );
const SteamTotp = require( 'steam-totp' );
const logger = require( './logger' );
const offerChecker = require( './offerChecker' );

let client = [];
let community = [];
let manager = [];

let bots;
let confirmations = [];

function logIn( bot, language ) {
  client.push( new SteamUser() );
  community.push( new Steamcommunity() );
  manager.push( new SteamTradeofferManager( {
    steam: client[ client.length - 1 ],
    community: community[ community.length - 1 ],
    language: language
  } ) );

  client[ client.length - 1 ].logOn( {
    accountName: bot.accountName,
    password: bot.accountPassword,
    twoFactorCode: SteamTotp.generateAuthCode( bot.sharedSecret )
  } );


  client[ client.length - 1 ].on( 'loggedOn', ( details ) => {
    var index = findIndex( details.client_supplied_steamid );
    logger.newLog( 'good', bots[ index ].consoleName, 'Logged on.' )
    client[ index ].setPersona( SteamUser.EPersonaState.Online );
    client[ index ].gamesPlayed( 440 );
    client[ index ].webLogOn();

    client[ index ].on( 'webSession', ( sessionid, cookies ) => {
      community[ index ].setCookies( cookies );
      manager[ index ].setCookies( cookies, ( err ) => {
        community[ index ].startConfirmationChecker( 20000, bots[ index ].identitySecret )
      } )
    } );
  } );



  manager[ manager.length - 1 ].on( 'newOffer', offer => {
    checkOffer( offer );
  } );
}




function findIndex( steamID64 ) {
  for ( let i = 0; i < bots.length; i++ ) {
    if ( steamID64 == bots[ i ].steamID64 ) {
      return i;
    }
  }
  logger.newLog( 'err', 'System', "Can't find correct steamID64 '" + steamID64 + "'" );
  return -1;
}


module.exports = {
  createBots( botsSettings, language ) {
    bots = botsSettings;
    for ( let i = 0; i < botsSettings.length; i++ ) {
      confirmations[ i ] = false;
      logIn( botsSettings[ i ], language );
    }
  }
}

// ------ Trade offers ------ //

function checkOffer( offer ) {
  const info = offerChecker.checkOffer( offer );
  const index = findIndex( info[ 1 ] );

  logger.newLog( 'normal', bots[ index ].consoleName, 'New offer id: ' + info[ 3 ] + ' from: ' + info[ 2 ] );

  if ( info[ 0 ] == 'accept' ) {
    logger.newLog( 'good', bots[ index ].consoleName, 'Offer id: ' + info[ 3 ] + ' is from administrator.' );
    acc( offer );
  } else if ( info[ 0 ] == 'donation' ) {
    logger.newLog( 'good', bots[ index ].consoleName, 'Offer id: ' + info[ 3 ] + ' is donation.' );
    acc( offer );
  } else {
    logger.newLog( 'err', bots[ index ].consoleName, 'Offer id: ' + info[ 3 ] + ' is from stranger.' );
    dec( offer );
  }



  function acc( offer ) {
    offer.accept( ( err, status ) => {
      if ( err ) {
        logger.newLog( 'err', bots[ index ].consoleName, err );
      } else {
        logger.newLog( 'good', bots[ index ].consoleName, status );
      }
    } );
  }

  function dec( offer ) {
    offer.decline( err => {
      if ( err ) {
        logger.newLog( 'err', bots[ index ].consoleName, 'Offer id: ' + info[ 3 ] + ' error while canceling: ' + err );
      } else {
        logger.newLog( 'err', bots[ index ].consoleName, 'Offer id: ' + info[ 3 ] + ' canceled.' );
      }
    } );
  }
}