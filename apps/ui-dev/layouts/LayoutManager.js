const items = {};

const list = import.meta.glob("./items/*.jsx", {
  eager: true,
});

Object.values(list).forEach((module) => {
  Object.assign(items, module);
});

export default {
  items,
  get(layout) {
    return this.items[layout];
  },
};
