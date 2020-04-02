Buy me a coffe :) https://www.buymeacoffee.com/Nyjako

# Steam storage bot
 
Simple steam bot that handle trade offers check if trade was send by any admin and accept or decline trade.
### Features
+ Handle incoming trade offers and check if trade was send by admin.
+ Allow you to use multiple steam accounts.

### Prerequisites
+ Node.js
+ npm

### Essentials
+ Steam Account available for trade
+ Shared Secret and Identity Secret Key: ([What is?](http://searchsecurity.techtarget.com/definition/shared-secret) | [How to get it? -iOS-](https://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/) | [How to get it? -Android-](https://forums.backpack.tf/index.php?/topic/46354-guide-how-to-find-the-steam-identity_secret-on-an-android-phone/))

### Node Modules
+ Without those modules bot will not work. Thanks to [DoctorMcKay](https://github.com/DoctorMcKay) for creating those.
  + [steam-user](https://www.npmjs.com/package/steam-user)
  + [steam-totp](https://www.npmjs.com/package/steam-totp)
  + [steamcommunity](https://www.npmjs.com/package/steamcommunity)
  + [steam-tradeoffer-manager](https://www.npmjs.com/package/steam-tradeoffer-manager)
+ Other modules (By editing the code you can make bot run without those)
  + [colors](https://www.npmjs.com/package/colors)
  + [date-and-time](https://www.npmjs.com/package/date-and-time)
  
  ### Set Up Bot
 + Edit [UserSettings/config.js](https://github.com/Nyjako/Steam-storage-bot/blob/master/UserSettings/config.js)
   +  Example:
  ```javascript
  module.exports = {
  settings: {
    admins: [ '' ], // List of admins steam id's, for example ['76561198115351967',...]
    acceptDonations: true, // Should bot accept donations from strangers
    language: 'en',
    logger: {
      timeFormat: 'HH:mm:ss', // Time format for logs
      dateFormat: 'YYYY.MM.DD', // Date format for logs
      logsFile: './log.txt' //File to save logs
    }
  },

  bots: [ {
      consoleName: 'Storage Bot #1', // How bot should name in console and log file
      nameToSet: 'Nyjako Storage Bot #1', // Name of bot will be changed to this
      accountName: 'bot account name',
      accountPassword: 'bot account password',
      sharedSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Allow bot to login without steam mobile token
      identitySecret: 'XXXXXXXXX/XXXXXXXXXXXXXXX/X=', // Allow bot to accept offers
      steamID64: '' // Steam id of bot
    }, // You can add multiple blocks like that
    {
      consoleName: 'Storage Bot #2',
      nameToSet: 'Nyjako Storage Bot #2',
      accountName: '',
      accountPassword: '',
      sharedSecret: '',
      identitySecret: '',
      steamID64: ''
    },
    ...
    ]
}
```
 + Install node modules
   +  Run [install.bat](https://github.com/Nyjako/Steam-storage-bot/blob/master/install.bat)
   +  If [install.bat](https://github.com/Nyjako/Steam-storage-bot/blob/master/install.bat) is not working you can try to execute this command `npm install`
  + To run bot
    +   Run [start.bat](https://github.com/Nyjako/Steam-storage-bot/blob/master/start.bat)
    +   Or try this command `npm start`

### License
 This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Nyjako/Steam-storage-bot/blob/master/LICENSE) file for details

### Contributing
If you are interested in contributing (and you can read my awful code) feel free to edit anything in this project.
