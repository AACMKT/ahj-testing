// const valid = require("card-validator");
import { cardsTypes } from './cards-types';

export default class Validator {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }

  checkInput() {
    const isDigitsOnly = /^\d+$/.test(String(this.cardNumber));
    return isDigitsOnly;
  }

  checkSum() {
    const payload = String(this.cardNumber).split('');
    const chekNum = Number(payload.pop());
    payload.reverse();
    const processedPayload = [];

    payload.forEach((el, i) => {
      if (i % 2 === 0) {
        const sum = (String(Number(el) * 2).split('')).reduce((cb, curr) => Number(cb) + Number(curr));
        processedPayload.push(Number(sum));
      } else processedPayload.push(Number(el));
    });
    const semiRes = Number((processedPayload.reduce((cb, curr) => cb + curr) % 10));
    const mod10 = semiRes !== 0 ? semiRes : 10;
    const res = 10 - mod10;
    console.log('validadion status: ', res === chekNum);
    return res === chekNum;
  }

  /*
  // Better to use this method with external modules since it covers more patterns
  checkPaymentService1() {
    let numberValidation = valid.number(String(this.cardNumber));

    if (!numberValidation.isPotentiallyValid) {
        return 'undefined';
    }

    if (numberValidation.card) {
        return String(numberValidation.card.type);
    }
  } */

  checkPaymentService() {
    const cardNumber = String(this.cardNumber);
    let response = 'undefined';
    cardsTypes.forEach((card) => {
      card.patterns.forEach((pattern) => {
        if (typeof pattern === 'string' || typeof pattern === 'number') {
          if (cardNumber.startsWith(String(pattern))) {
            response = String(card.type);
          }
        }

        if (typeof pattern === 'object') {
          const patternLength = String(pattern[0]).length;
          const cardInn = Number(cardNumber.substring(0, patternLength));
          if (cardInn >= Number(pattern[0]) && Number(cardInn <= pattern[1])) {
            response = String(card.type);
          }
        }
      });
    });
    return response;
  }
}
