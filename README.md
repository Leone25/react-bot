# React-bot
A super simple discord bot thta gives and removes your roles when you react to a message


## Features
- Add roles whenever someone reacts to a certain message with a choosen emoji
- Removes roles whenever someone removes a reaction from a certain message with a choosen emoji

## How to set up
  1. First make sure that you have the latest version of [NodeJS](https://nodejs.org/en/) installed.
  2. Run this command in a command prompt to install all the libraries required to run the code: `npm install` .
  3. Create your bot on the [developer portal on the discord website](https://discordapp.com/developers).
  4. Copy the example config to `config.json` and configure as detailed below.
  
  |Setting|Description|
  |--|--|
  |`token`|Discord API bot token (found on the developer portal)|
  |`activity`|Whatever you want your bot to say in the playing status|
  |`reactions`|An array of all the messages you want to check|
  |`reactions.messageId`|The is of the message to check|
  |`reactions.emojiId`|The id of the emoji that the users have to react to|
  |`reactions.roleId`|The id of the role ot give the users thta react to the message with the selected emoji|
  5. Connect your bot to your guild, by entering thE link `https://discordapp.com/oauth2/authorize?client_id={YOUR BOT ID}scope=bot&permissions=8`.
  7. Start the bot by running `node index.js `.
  8. Congratulation, your bot is up and running!
  
## If any problem comes up or something please open an issue on github (I haven't tested it much)

 Have a great life!
