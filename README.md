# Steam storage bot
 
Simple steam bot that handle trade offers check if trade was send by any admin and accept or decline trade.
###Features
+ Handle incoming trade offers and check if trade was send by admin.
+ Allow you to use multiple steam accounts.

### Prerequisites
+ Node.js
+ npm

###Essentials
+ Steam Account available for trade
+ Shared Secret and Identity Secret Key: ([What is?](http://searchsecurity.techtarget.com/definition/shared-secret) | [How to get it? -iOS-](https://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/) | [How to get it? -Android-](https://forums.backpack.tf/index.php?/topic/46354-guide-how-to-find-the-steam-identity_secret-on-an-android-phone/))

###Node Modules
+ Without those modules bot will not work. Thanks to [DoctorMcKay](https://github.com/DoctorMcKay) for creating those.
 + [steam-user](https://www.npmjs.com/package/steam-user)
 + [steam-totp](https://www.npmjs.com/package/steam-totp)
 + [steamcommunity](https://www.npmjs.com/package/steamcommunity)
 + [steam-tradeoffer-manager](https://www.npmjs.com/package/steam-tradeoffer-manager)
+ Other modules (By editing the code you can make bot run without those)
  + [colors](https://www.npmjs.com/package/colors)
  + [date-and-time](https://www.npmjs.com/package/date-and-time)