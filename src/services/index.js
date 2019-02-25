
const firebaseUrl = 'https://project-nan-app.firebaseio.com/';

export const getCustomersPromise = () =>
  fetch(`${firebaseUrl}/customers.json`)
    .then(response => response.json())
    .then(data =>
      Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }))
    );

export const getPackagesPromise = () =>
  fetch(`${firebaseUrl}/packages.json`)
    .then(response => response.json())
    .then(data =>
      Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }))
    );