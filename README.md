# yargs sequelize mysql



```zsh
node src/app.js --add --title "Last Film just before the next" --actor Junior
node src/app.js --add --title "Last Film before the next" --actor Junior
node src/app.js --add --title "Last Film" --actor Tom --director Junior
node src/app.js --list
node src/app.js --list --key actor --value Junior
node src/app.js --list --key actor --value Junior
node src/app.js --list --key actor --value Tom
node src/app.js --delete --key actor --value Tom
node src/app.js --list
node src/app.js --add --title "Last Film" --actor Tom
node src/app.js --update --newActor Tom --oldActor Junior
node src/app.js --list --key actor --value Junior
node src/app.js --list --key actor --value Tom
```