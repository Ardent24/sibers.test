import {userAlphabet} from '@/controllers/usersAlphabet';

const searchContacts = (app) => {
  const LOCALE_STORAGE = userAlphabet(JSON.parse(localStorage.getItem('users')));

  const contactsContent = document.querySelector('.contacts-content');
  const inputSearch = document.querySelector('.contacts-header__search');

  const resultSearch = document.createElement('div');
  resultSearch.className = 'contacts-find';

  app.appendChild(resultSearch);

  inputSearch.addEventListener('input', () => {
    const inputValue = inputSearch.value.trim().toLowerCase();

    if (inputValue !== '') {
      contactsContent.style.display = 'none';
      resultSearch.style.display = 'flex';

      resultSearch.innerHTML = '';

      resultSearch.insertAdjacentHTML('beforeend', `
          <h3 class="contacts-find__title">best name matches</h3>
      `);

      LOCALE_STORAGE.forEach(user => {
        if (user.name.search(inputValue) !== -1) {
          const elem = document.createElement('div');

          elem.innerHTML = insertMark(user.name, user.name.search(inputValue), inputValue.length);
          resultSearch.appendChild(elem);
        }
      })
    }

    if (inputValue == '') {
      resultSearch.style.display = 'none';
      contactsContent.style.display = 'block';
    }
  });
}

function insertMark(str, position, long) {
  return str.slice(0, position) +
    '<mark>' + str.slice(position, position + long) + '</mark>' +
    str.slice(position + long);
}

export {searchContacts};