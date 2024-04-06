import { validCards, mixedNumbers } from '../index';
import Validator from '../validator';

test.each(validCards)('should check %s card number for validity', (service, cardNum) => {
  const validator = new Validator(cardNum);
  expect(validator.checkPaymentService()).toBe(service);
});

test.each(mixedNumbers)('should check are cards numbers valid', (cardNum, status) => {
  const validator = new Validator(cardNum);
  expect(validator.checkSum()).toBe(status);
});

test.each(
  [['123bbba4567890', false],
    ['4539445677581471', true],
  ],
)('should check that only card numbers with digits pass', (cardNum, status) => {
  const validator = new Validator(cardNum);
  expect(validator.checkInput()).toBe(status);
});
