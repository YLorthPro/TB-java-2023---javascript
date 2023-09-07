//01
let regex = /^fin[a-z]*$/gmi;
let str = "finlandais"
console.log(str.match(regex));

//02
let regex2 = /(cash)(?=flow)/gmi;
let str2 = "cash flow cashflow"
console.log(str2.match(regex2));


//03
let regex3 = /[0-9]+ mill(ions?|iards?)/gmi;
let str3 = "800 mille 115 milliards"
console.log(str3.match(regex3));