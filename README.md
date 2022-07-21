# diamond-cli

A cli tool for working with Diamond Express

## usage
```bash
## Shows help command
dmd help

## Generates v4 UUID and copies to clipboard
dmd uuid

## Describes the current app's environment variables
dmd env

## Generates boilerplate Express api
dmd make app --name=[name]
```

**Configuring the CLI** 

This is for upcoming features and is currently not used in any command.

```bash
## Sets a key/value in the CLI's config
dmd config set --key=[key] --value=[value]

## View the CLI's config
dmd config view
```

## Todo

✅ Generate UUID  
✅ Make App Folders  
✅ Make package.json / .gitignore / readme.md   
✅ Display current environment configs  
✅ Make Express API  
❌ Make MongoDB database?  
❌ Make database/seeds folder  
❌ Perform Database actions -> Get DB URL from env config and run own Mongoose/Librarian  
- ❌ Nuke database -> Add check that current env config is test // Never allow in Prod
- ❌ Add record to DB from database/seeds/[fileName].json