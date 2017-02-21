import Person from './modules/Person';

const $ = require('jquery'); // For jQuery demo

class Adult extends Person {
  payTaxes() {
    console.log(`${this.name} owes $0 in taxes.`);
  }
}

const john = new Person('John Doe', 'purple');
john.greet();

const jane = new Adult('Jane Doe', 'teal');
jane.greet();
jane.payTaxes();

$('h1').remove(); // jQuery demo
