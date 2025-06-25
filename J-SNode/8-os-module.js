//Os module 
const os = require('os');

// Info about current user

const user = os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    platform: os.platform()
};

console.log(currentOS);