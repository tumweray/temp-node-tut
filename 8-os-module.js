const os = require('os')

//info about current user 
const user = os.userInfo()
console.log(user);
//returns the systems uptime in seconds 
console.log(`system uptime ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
