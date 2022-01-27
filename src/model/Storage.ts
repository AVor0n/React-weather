export default {
  setItem: (name: string, item: Object) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    if (item) return JSON.parse(item);
  },
};
