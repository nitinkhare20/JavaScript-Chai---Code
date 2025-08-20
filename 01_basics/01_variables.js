const accountId=1234
let accountEmail="nitin@gmail.com"
var accountPassword="1234abcd"
accountCity="Delhi"
// accountId=2 not allowed


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail="nk@gmail.com"
accountPassword="7905"
accountCity="mathura"

console.table([accountId,accountEmail,accountPassword,accountCity])