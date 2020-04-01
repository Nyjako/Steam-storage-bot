let admins = [];
let donations;



module.exports = {
  setSettings( adminsS, acceptDonations ) {
    admins = adminsS;
    donations = acceptDonations;
  },
  checkOffer( offer ) {
    return check( offer );
  }
}


function check( offer ) {
  for ( var i = 0; i < admins.length; i++ ) {
    if ( offer.partner.getSteamID64() === admins[ i ] ) {
      return [ 'accept', offer.manager.steamID, offer.partner, offer.id ];
    }
  }
  if ( donations ) {
    if ( offer.itemsToGive.length == 0 && offer.itemsToReceive.length > 0 ) {
      return [ 'donation', offer.manager.steamID, offer.partner, offer.id ];
    }
  }
  return [ 'cancel', offer.manager.steamID, offer.partner, offer.id ];
}