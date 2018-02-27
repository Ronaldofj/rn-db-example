import repository from './repositoryDB';

export const database = repository('User');

export const userOffline = {
  get: where => database.get(where),
  update: (params, values) => database.update(params, values),
  insert: (params, values) => database.insert(params, values),
  remove: where => database.remove(where),
  allDocs: () => database.allDocs(),
};
