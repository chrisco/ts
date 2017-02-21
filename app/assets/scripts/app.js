const $ = require('jquery'); // For jQuery demo
const Person = require('./modules/Person');

alert('Testing webpack automation and Browsersync');

const john = new Person('John Doe', 'purple');
john.greet();

const jane = new Person('Jane Doe', 'teal');
jane.greet();

$('h1').remove(); // jQuery demo
