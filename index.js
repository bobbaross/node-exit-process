/*
steadmatthew on github, stupid package number 3
*/
module.exports = function(code) {
    if (!code) code = 0
    process.exit(code)
}
exports.log = (log) => {
    if(!log) {
        console.log("where is the log? am I dumb?")
        process.exit(-1)
    } else {
        console.log(log)
    }
}
