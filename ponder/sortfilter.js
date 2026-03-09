nums = [12, 10, 8, 3];
console.log(nums.sort())
function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}
console.log(nums.sort(compareFn))

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
console.log(simpleList);
let simpleSort = simpleList.map(function(item){
    return item.toLowerCase();
})
console.log(simpleSort);
let searchTerm = 'an';
let filterFruit = simpleSort.filter(searchFruit);
function searchFruit(item){
    return item.includes(searchTerm);
}
console.log(filerFruit);

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];
function comparePrice(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}
let productSort = products.sort(comparePrice());
console.log(productSort);

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
let query = "dog";
let queryTrait = "cuddly";
let filteredList = animals.filter(searchList);
let filteredTraits = animals.filter(searchTraits);
function searchList(item){
    return item.name.toLowerCase().includes(query.toLowerCase())
}
console.log(filteredList);
function searchTraits(item){
    return item.traits.find((trait) => 
     trait.toLowerCase().includes(queryTrait.toLowerCase())
    )
}
console.log(filteredTraits);