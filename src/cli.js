const arg = require('arg');

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
//TODO
}

