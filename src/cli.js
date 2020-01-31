const arg = require('arg')
const ru = require('./commands/ru.js')
const chalk = require('chalk')
const args = arg({
    
  '--help': Boolean,
  '--version': Boolean,
  '--lunch': Boolean,
  '--dinner': Boolean,
  '--dessert': Boolean,

   //Aliases
   '-h': '--help',
   '-v': '--version',
   '-l': '--lunch',
   '-d': '--dinner',
   '-ds': '--dessert'
})



export function cli(){


//That needs refactoring... 

if(args['--lunch'])
ru.scrapeMeal(1)

if(args["--dinner"])
ru.scrapeMeal(2)

if(arg['--dessert'])
ru.scrapeMeal(4)

if(args["--help"])
console.log(chalk.bold.rgb(10, 100, 200)(`Usage: ufabcli <command>`))
console.log(chalk.bold.rgb(255, 255, 255)(`Available commands: \n
-h --help     for list of available commands
-l --lunch    for lunch of the day
-d --dinner   for dinner of the day
-ds --dessert for dessert of the day
-v --version  for current version`
));


}

