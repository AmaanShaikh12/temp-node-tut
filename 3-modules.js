//commonjs,every file is a module
//modules-encapsulated code(only share minimum)
//when you import a module it automatically inviokes it
const names=require('./names.js');
const sayhi=require('./utils');
const data=require('./6-alternative-flavor');
require('./7-mind-grenade');
console.log(names);
console.log(sayhi);
console.log(data);

// sayhi('susan');
// sayhi(names.john);
// sayhi(names.peter);