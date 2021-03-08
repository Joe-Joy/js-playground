function createObject(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

var inventory = [
  { title: "ashli", price: 12 },
  { title: "joe", price: 13 },
];

createObject(inventory).inventoryValue;
createObject(inventory).priceForTitle;
