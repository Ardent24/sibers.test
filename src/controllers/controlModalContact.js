export default class ControlModalContact {
  constructor(templateModal) {
    this.templateModal = templateModal;
    this.app = document.querySelector('.contacts-modal');
  }

  create() {
    this.app.insertAdjacentHTML('beforeend', this.templateModal());
    this.app.classList.add('active');
    this.app.querySelector('.contacts-modal__wrapper').animate([
      {transform: 'translateY(-300px)'},
      {transform: 'translateY(0)'},
    ], {duration: 500});
  }

  destroyer() {
    this.app.querySelector('.contacts-modal__close').addEventListener('click', () => {
      this.app.innerHTML = '';
      this.app.classList.remove('active');
    });
    document.addEventListener('click', (event) => {
      if (event.target == this.app.querySelector('.contacts-modal__close') || event.target == this.app) {
        event.stopPropagation();
        this.app.innerHTML = '';
        this.app.classList.remove('active');
      }
    });
  }
}