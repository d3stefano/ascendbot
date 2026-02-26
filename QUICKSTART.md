# Quick Start Guide for AscendBot

## Installation Instructions
1. **Clone the repository:**  
   Run the following command to clone the repository:
   ```bash
   git clone https://github.com/d3stefano/ascendbot.git
   ```

2. **Navigate to the directory:**  
   ```bash
   cd ascendbot
   ```

3. **Install dependencies:**  
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

## Configuration Steps for Channels and Roles
1. **Set Up Discord Bot:**  
   - Go to the Discord Developer Portal and create a new application.
   - Add a bot to the application from the Bot section.

2. **Configure Bot Permissions:**  
   Ensure the bot has the necessary permissions to access the channels and roles you want it to manage.
   You can do this in the Roles section of your Discord server settings.

3. **Configuration File:**  
   - Create a `config.json` file in the root directory of the bot:
   ```json
   {
     "token": "YOUR_BOT_TOKEN",
     "prefix": "!",
     "channels": ["CHANNEL_ID_1", "CHANNEL_ID_2"],
     "roles": ["ROLE_ID_1", "ROLE_ID_2"]
   }
   ```

## Testing Commands
Once the bot is running, you can test its functionality by:
- Inviting the bot to your server.
- Using the configured prefix (e.g., `!`) followed by a command. For example:
  ```bash
  !help
  ```

## Troubleshooting
- **Bot is Offline:**  
  Check if the bot is running and the token in the config file is correct.
- **Missing Permissions:**  
  Ensure your bot has the necessary permissions in the server settings.

## File Structure
```
ascendbot/
├── config.json        # Bot configuration file
├── index.js           # Main bot file
├── commands/          # Directory for command files
│   ├── help.js       # Help command
│   └── ...           # Other commands
└── ...               # Other files and folders
```
