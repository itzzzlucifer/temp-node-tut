//CommonJS, every file is module (by default)
//Modules - encapsulated code (only share minimum)
const {john, peter} = require('./4-names.js');
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js');
require('./7-mind-grenade.js');
//logging the whole module
console.log(data);

//logging the module properties
console.log(data.singlePerson);
console.log(data.singlePerson.name);
console.log(data.singlePerson.age);
console.log(data.items);
console.log(data.items[0]);
sayHi('susan')
sayHi(john);  
sayHi(peter);