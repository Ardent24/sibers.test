import {userAlphabet} from '@/controllers/usersAlphabet';
import {createContacts} from '@/views/contacts/createContacts';

const editContacts = (app) => {
  const LOCALE_STORAGE = userAlphabet(JSON.parse(localStorage.getItem('users')));

  const modalWrapper = document.querySelector('.contacts-modal');
  const listInputs = modalWrapper.querySelectorAll('.contacts-modal__inp');
  const textTitleModal = modalWrapper.querySelector('.contacts-modal__title').innerHTML;

  listInputs.forEach(elem => {
    elem.addEventListener('blur', () => {
      const elemAttr = elem.getAttribute('data-attr');
      const findAddress = elem.previousElementSibling.innerHTML.toLowerCase();

      LOCALE_STORAGE.forEach(obj => {
        if (obj.name == textTitleModal) {
          if (findAddress == 'country' || findAddress == 'city') {
            obj.address[findAddress] = elem.value;
          } else {
            obj[elemAttr] = elem.value;
          }

          localStorage.setItem('users', JSON.stringify(LOCALE_STORAGE));
        }
      });
      createContacts(app);
    });
  });
}

export {editContacts};