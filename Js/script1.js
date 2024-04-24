const str = 'All promgrammers start with a Hello World application';

const regex1 = /hello/;

// Regex - Regular Expression Method
// Return true or false if matched
console.log(regex1.test(str));
// 
console.log(regex1.exec(str));

// String method
// returns array of matches
console.log(str.match(regex1)); 
// returns the index
console.log(str.search(regex1)); 
// find and replace
console.log(str.replace(regex1, 'Hi')); 