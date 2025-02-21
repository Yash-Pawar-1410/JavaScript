const accountId =14455 // we can not change the value
let accountEmail = "yashpawar1410@gmail.com" // we can change the value
var accountPassword = "12345" 
/*
Prefer not to use var
because of issue in block scope and  functional scope
*/
accountCity = "Pune"
let accountState


// accountId =2 // not allowed
accountEmail = "abc@gamil.com"
accountPassword = "111"
accountCity = "Dhule"


console.log(accountId);
console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity])
