var path = require('path');
var completePath = '/foo/bar/bas.html';
// Logs : /foo/bar
console.log(path.dirname(completePath));
// Logs : bas.html
console.log(path.basename(completePath));
// Logs : .html
console.log(path.extname(completePath));

var fs = require('fs');
// write
fs.writeFileSync('test.txt', 'Hello fs!');
// read
console.log(fs.readFileSync('test.txt').toString());

var fs = require('fs');
try {
    fs.unlinkSync('./test.txt');
    console.log('test.txt successfully deleted');
}
catch (err) {
    console.log('Error:', err);
}

var os = require('os');
var gigaByte = 1 / (Math.pow(1024, 3));
console.log('Total Memory', os.totalmem() * gigaByte, 'GBs');
console.log('Available Memory', os.freemem() * gigaByte, 'GBs');
console.log('Percent consumed', 100 * (1 - os.freemem() / os.totalmem()));
console.log('This machine has', os.cpus().length, 'CPUs');