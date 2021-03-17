import {createContacts} from '@/views/contacts/createContacts';
import {userAlphabet} from '@/controllers/usersAlphabet';

const controlNewContact = (app, main) => {
  const LOCALE_STORAGE = JSON.parse(localStorage.getItem('users'));

  const modalWrapper = document.querySelector('.contacts-modal');
  const listInputs = document.querySelectorAll('.contacts-modal__inp');

  document.addEventListener('click', (event) => {
    if (event.target == modalWrapper.querySelector('.contacts-modal__close') ||
      event.target == modalWrapper.querySelector('.contacts-modal__closed') ||
      event.target == modalWrapper) {
      event.stopPropagation();

      modalWrapper.innerHTML = '';
      modalWrapper.classList.remove('active');
    }
    if (event.target == modalWrapper.querySelector('.contacts-modal__added')) {
      modalWrapper.innerHTML = '';
      modalWrapper.classList.remove('active');

      const newUser = {
        name: listInputs[0].value[0].toUpperCase() + listInputs[0].value.slice(1),
        phone: listInputs[1].value,
        email: listInputs[2].value,
        address: {
          country: listInputs[3].value,
          city: listInputs[4].value,
        },
      };

      LOCALE_STORAGE.push(newUser);
      userAlphabet(LOCALE_STORAGE);

      localStorage.setItem('users', JSON.stringify(LOCALE_STORAGE));

      createContacts(main);
    }
  });
}

export {controlNewContact};