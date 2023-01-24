import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO (Done): Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const store = jateDb.transaction('jate', 'readwrite').objectStore('jate');
  const request = store.put({id: 1, jate_content: content});
  const result = await request;
  console.log(`User content has been saved.`);
}

// TODO (Done): Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const store = jateDb.transaction('jate', 'readonly').objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('Attempt to load content from database returned: ', result);
  return result;
}
initdb();
