import {controlNewContact} from '@/controllers/controlNewContact';

const createNewContact = (app, main) => {
  const modalWrapper = document.querySelector('.contacts-modal');
  const btn = document.querySelector('.contacts-header__add');

  btn.addEventListener('click', () => {
    modalWrapper.insertAdjacentHTML('beforeend', createTemplateNewUser());
    modalWrapper.classList.add('active');
    modalWrapper.querySelector('.contacts-modal__wrapper').animate([
      {transform: 'translateY(-300px)'},
      {transform: 'translateY(0)'},
    ], {duration: 500});

    modalWrapper.querySelector('.contacts-modal__inp').focus();

    controlNewContact(app, main);
  });
}

export {createNewContact};

function createTemplateNewUser() {
  return `
          <div class="contacts-modal__wrapper">
              <header class="contacts-modal__header">
                 <h4 class="contacts-modal__title">add contact</h4>
                 <button class="contacts-modal__close">&times;</button>
              </header>
              <main class="contacts-modal__main">
                <div class="contacts-modal__group">
                  <label class="contacts-modal__lable" for="name">Name</label>
                  <input type="text" name="name" class="contacts-modal__inp" required >
                </div>
                <div class="contacts-modal__group">
                  <label class="contacts-modal__lable" for="phone">Phone</label>
                    <input type="text" name="phone" class="contacts-modal__inp" required>
                </div>
                <div class="contacts-modal__group">
                   <label class="contacts-modal__lable" for="email">Email</label>
                      <input type="text" name="email" class="contacts-modal__inp">
                </div>
                <div class="contacts-modal__group">
                  <label class="contacts-modal__lable" for="country">Country</label>
                    <input type="text" name="country" class="contacts-modal__inp">
                </div>
                <div class="contacts-modal__group">
                  <label class="contacts-modal__lable" for="city">City</label>
                    <input type="text" name="city" class="contacts-modal__inp">
                </div>
              </main>
              <footer class="contacts-modal__footer">
                <button class="contacts-modal__closed">Close</button>
                <button class="contacts-modal__added">Add</button>
              </footer>
          </div>
        `
}