const arg = require('arg')
const ru = require('./commands/ru.js')

const args = arg({
    
  '--help': Boolean,
  '--version': Boolean,
  '--lunch': Boolean,
  '--dinner': Boolean,

   //Aliases
   '-h': '--help',
   '-v': '--version',
   '-l': '--lunch',
   '-d': '--dinner'
})



export function cli(){


//That needs refactoring... 

if(args['--lunch'])
ru.scrapeMeal(1)
if(args["--dinner"])
ru.scrapeMeal(2)



}

