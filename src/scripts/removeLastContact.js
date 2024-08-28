import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  const contactList = await getAllContacts();
  contactList.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

removeLastContact();
