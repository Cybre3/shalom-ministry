export const categories = {
  messages: [
    { _id: 1, name: 'contact us' },
    { _id: 2, name: 'sponsor' },
  ],
  registrations: [{ _id: 3, name: 'cwat' }],
};


export function getAllCategories(type) {
  return categories[type];
}
