export default class Interface {
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.cardsHolder = this.element.querySelector('.cards__box');
    this.showCards = this.showCards.bind(this);
    this.onInput = this.onInput.bind(this);
    this.element.addEventListener('DOMContentLoaded', this.showCards());
    this.element.addEventListener('input', (e) => this.onInput(e));
  }

  getNumber() {
    const form = this.element.querySelector('.form_container');
    const input = form.querySelector('.input_box');

    return String(input.value).trim();
  }

  showMessage(text) {
    const msgBox = this.element.querySelector('.message');
    msgBox.textContent = text;
  }

  showCards() {
    this.data.cards.forEach((el) => {
      const card = document.createElement('div');
      card.classList.add('card_container');
      card.classList.add('gray_style');
      card.style.backgroundImage = `url(${el.img})`;
      if (el.payment_system === 'undefined') {
        card.classList.add('hidden');
      }
      if (el.payment_system === 'undefined') {
        card.classList.add('hidden');
      }
      card.dataset.name = el.payment_system;
      this.cardsHolder.appendChild(card);
    });
  }

  onInput(e) {
    const button = this.element.querySelector('.modal_button');
    const msgBox = this.element.querySelector('.message');

    Array.from(this.cardsHolder.children).forEach((card) => card.classList.add('gray_style'));
    this.cardsHolder.children[0].scrollIntoView({ inline: 'center', behavior: 'smooth' });

    if (msgBox.textContent.length) {
      msgBox.textContent = '';
    }

    if (e.target.value.length < 12) {
      if (!button.hasAttribute('disabled')) {
        button.setAttribute('disabled', 'true');
      }
    } else {
      button.removeAttribute('disabled');
    }
  }

  focusOn(cardType) {
    let el = this.cardsHolder.querySelector(`[data-name*="${cardType}"]`);
    if (el == null) {
      el = this.cardsHolder.querySelector('[data-name*="undefined"]');
      el.classList.remove('hidden');
      el.innerHTML = `<p>${cardType}</p>`;
    }
    el.classList.remove('gray_style');
    el.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }
}
