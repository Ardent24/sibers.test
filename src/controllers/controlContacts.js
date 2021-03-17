import CreateModalContact from '@/views/modal/createModalContact';
import ControlModalContact from '@/controllers/controlModalContact';
import {editContacts} from '@/controllers/editContacts';

const controlContacts = (app) => {
  const listBtns = document.querySelectorAll('.contacts-content__elem');

  listBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.innerText;
      const email = btn.getAttribute('data-email');
      const phone = btn.getAttribute('data-phone');
      const country = btn.getAttribute('data-country');
      const city = btn.getAttribute('data-city');

      const createModal = new CreateModalContact(name, phone, email, country, city);
      const addModal = new ControlModalContact(createModal.templateModal.bind(createModal));

      addModal.create();
      addModal.destroyer();
      editContacts(app);
    });
  })
}

export {controlContacts};