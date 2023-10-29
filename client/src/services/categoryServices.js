export const categories = {
  messages: [
    { _id: 1, name: 'contact us' },
    { _id: 2, name: 'sponsor' },
  ],
  registrars: [{ _id: 3, name: 'CWAT' }],
};


export function getAllCategories(type) {
  return categories[type];
}
