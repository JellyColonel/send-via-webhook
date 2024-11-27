# Discord Department Structure Bot
A Discord bot that displays department structure using webhooks and embedded messages.

## Features
- Automatically generates department structure embeds
- Supports multiple role levels with custom colors
- Mentions Discord users with their IDs
- Includes additional user information (name and ID number)
- Timestamps for structure updates

## Setup
1. Install dependencies:
```bash
npm install node-fetch dotenv
```

2. Create a `.env` file in the root directory and add your Discord webhook URL:
```
DISCORD_WEBHOOK_URL=your_webhook_url_here
```

3. Configure department structure in `config.js`:
- Modify roles, colors, and user information
- Each user entry should follow the format: `"discord_id | name | number"`

## Usage
Run the bot:
```bash
node webhook.js
```

## File Structure
- `config.js` - Department configuration and user data
- `webhook.js` - Main bot logic and webhook handling
- `.env` - Environment variables
- `.gitignore` - Git ignore rules