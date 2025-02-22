/* console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1); */

//console.log("2" > 1);  // javascript automatically convert it in number
//console.log("02" > 1);  // javascript automatically convert it in number

// In JS we can compare different data type but TS we can't

/*console.log(null > 0);
console.log(null >= 0);  // it gives true due to conversion
console.log(null < 0);
console.log(null == 0);
console.log(null != 0);
*/

//  equality check ==  and comparisions ><>=<= work differently
// Comparision convert null to number, treating it as 0 that's why (0) null >= 0 is ture and (0)null>0 is false

/*
console.log( undefined == 0);
console.log( undefined > 0);
console.log( undefined <  0);
console.log( undefined <=  0); // above condition can not be work on undefined
*/

// === strict check (check value as well as data type)

console.log("22" === 2);




