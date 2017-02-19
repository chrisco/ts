const $ = require('jquery'); // For jQuery demo
const Person = require('./modules/Person');

const john = new Person('John Doe', 'purple');
john.greet();

const jane = new Person('Jane Doe', 'teal');
jane.greet();

$('h1').remove(); // jQuery demo
