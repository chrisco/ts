import Person from './modules/Person';

// For jQuery demo
const $ = require('jquery');

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

// jQuery demo
// $('h1').remove();
