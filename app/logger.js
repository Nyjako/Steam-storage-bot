const fs = require( 'fs' );
const Colors = require( 'colors' );
const date = require( 'date-and-time' );

let timeFormat;
let dateFormat;
let logsFile;

module.exports = {
  setSettings( settings ) {
    timeFormat = settings.timeFormat;
    logsFile = settings.logsFile;
    dateFormat = settings.dateFormat;

    appendToFile( '\r\n' + ' ------ ' + getDate() + ' ' + getTime() + ' Started ------' + '\r\n' );
  },
  newLog( type, botConsoleName, msg ) {
    switch ( type ) {
      case 'good':
        console.log( getTime() + ' - ' + botConsoleName + ': ' + msg.green )
        break;
      case 'normal':
        console.log( getTime() + ' - ' + botConsoleName + ': ' + msg )
        break;
      case 'err':
        console.log( getTime() + ' - ' + botConsoleName + ': ' + msg.red )
        break;
    }
    if ( logsFile != false ) {
      appendToFile( getDate() + ' ' + getTime() + ' - ' + botConsoleName + ': ' + msg + '\r\n' );
    }
  }
}

function getTime() {
  return date.format( new Date(), timeFormat );
}

function getDate() {
  return date.format( new Date(), dateFormat );
}

function appendToFile( data ) {
  fs.appendFile( logsFile, data, ( err ) => {
    if ( err ) throw err;
  } );
}