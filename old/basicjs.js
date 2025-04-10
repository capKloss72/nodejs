console.log(null == undefined); // true
console.log(null === undefined); // false
// Are these all falsy?
if (!false) {
    console.log('falsy');
}
if (!null) {
    console.log('falsy');
}
if (!undefined) {
    console.log('falsy');
}

// try {
//     setTimeout(function () {
//         console.log('About to throw an error');
//         throw new Error('Error thrown');
//     }, 1000);
// }
// catch (e) {
//     console.log('I will never execute!');
// }
// console.log('I am outside the try block');

setTimeout(function () {
    try {
        console.log('About to throw an error');
        throw new Error('Error thrown');
    }
    catch (e) {
        console.log('Error caught!');
    }
}, 1000);

function getConnection(callback) {
    var connection;
    try {
        // Lets assume that the connection failed
        throw new Error('connection failed');
        // Notify callback that connection succeeded?
        callback(null, connection);
    }
    catch (error) {
        // Notify callback about error?
        callback(error, null);
    }
}
// Usage
getConnection(function (error, connection) {
    if (error) {
        console.log('Error:', error.message);
    }
    else {
        console.log('Connection succeeded:', connection);
    }
});