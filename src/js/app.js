import Validator from './validator';
import Interface from './interface';

const data = require('../json/cards_info.json');

const element = document.querySelector('.validator');
const form = document.querySelector('.form_container');
const view = new Interface(element, data);
let text = '';

document.addEventListener('DOMContentLoaded', () => {
  text = 'Input card number';
  view.showMessage(text);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = view.getNumber();
  const test = new Validator(number);
  if (!test.checkInput()) {
    text = 'Сard number can only contain digits';
    view.showMessage(text);
  } else if (test.checkSum()) {
    const type = test.checkPaymentService();
    if (type !== 'undefined') {
      text = `Card number is valid (${String(type).toUpperCase()})`;
    } else {
      text = 'Card number is valid (service not recognized)';
    }
    view.focusOn(type);
    view.showMessage(text);
  } else {
    text = 'Invalid card number!';
    view.showMessage(text);
  }
});
