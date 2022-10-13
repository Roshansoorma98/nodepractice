const str= 'Roshansoorma';
console.log('Original',str);
console.log('Result of slice: ',str.slice(1,3));
console.log('Result of subString: ',str.substring(0,3));

// Replacing Hydrabad from banglore
const str1='I am from hydrabad';
console.log('Original string :',str1);
const reStr= str1.replace('hydrabad','Banglore'); // replace is the methode to replace one string with others
console.log('Replaced string :',reStr);

// lower case to upper case
const x ='I am Roshan';
const y= x.toUpperCase();  // toUpperCase is a method of converting all the string charactors in upper case
console.log('Upper case: ',y);

// upper case to lower case
const p ='I am Roshan';
const q= x.toLowerCase(); // tolowerCase is a method of converting all the string charactors in lower case
console.log('Lower case: ',q);

// Concat string
const str2= 'Roshan';
const newString= 'Soorma';
const resultstr= str2.concat(newString); // concat function add two string 
console.log('concated string: ',resultstr);

// trim any string

const strWithSpace='  I am Roshan soorma ';
const strWithoutSpace=strWithSpace.trim(); // trim function removes white space from the string
console.log('Trim string:',strWithoutSpace);
