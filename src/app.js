import './styles/main';

import {createHeader} from '@/views/header/header';
import {ajaxUsers} from '@/modules/ajaxUsers';
import {dataLS} from '@/modules/dataLS';
import {userAlphabet} from '@/controllers/usersAlphabet';
import {createContacts} from '@/views/contacts/createContacts';
import {searchContacts} from '@/controllers/searchContacts';
import {createNewContact} from '@/views/modal/createNewContact';

const app = document.querySelector('.contacts-wrapper');
const wrapContacts = app.querySelector('.contacts-content')
const promiseUsers = ajaxUsers();

app.insertAdjacentHTML('beforebegin', createHeader());

promiseUsers
  .then(data => userAlphabet(dataLS(data)))
  .then(data => createContacts(wrapContacts))
  .then(data => searchContacts(app))
  .then(data => createNewContact(app, wrapContacts))