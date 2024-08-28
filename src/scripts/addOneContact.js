import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {};
const contsctsList = await getAllContacts();
const newContact = createFakeContact();
contsctsList.push(newContact);
await fs.writeFile(PATH_DB, JSON.stringify(contsctsList, null, 2));

addOneContact();
