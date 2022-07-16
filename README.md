# diamond-cli

A cli tool for working with Diamond Express

## usage
```
dmd help -- Shows help command
dmd uuid -- Generates v4 UUID and copies to clipboard
dmd make app -- Generates boilerplate Express api
dmd env -- Describes the current app's environment variables
```

## Todo

[x] = Generate UUID  
[x] = Make App Folders  
[x] = Make package.json / .gitignore / readme.md   
[x] = Display current environment configs  
[x] = Make Express API  
[] = Make MongoDB database?  
[] = Make database/seeds folder  
[] = Perform Database actions -> Get DB URL from env config and run own Mongoose/Librarian  
- [] = Nuke database -> Add check that current env config is test // Never allow in Prod
- [] = Add record to DB from database/seeds/[fileName].json