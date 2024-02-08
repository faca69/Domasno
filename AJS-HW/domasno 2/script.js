// # Homework 1
// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price.
// Create an array of 15 products. 
// Now answer the following requirements:

// * Find all products with price greater than 20.
// * Get the names of all products of Category Food, that are on discount.
// * Get the price of all products that are on discount.
// * Find the name and price of all products with name starting with a vowel, that are not on discount.

function Product(name, category, hasDiscount, price) {

this.name = name;
this.category = category;
this.hasDiscount = hasDiscount;
this.price = price;
}

let products = [

new Product('Pizza', 'Food', true , 400),
new Product('Milk', 'Beverage', false , 67),
new Product('Chocolate', 'Food', false , 40),
new Product('Shirt', 'Clothing', true , 1700),
new Product('Chips', 'Food', false , 85),
new Product('Basketball', 'Sports', true , 800),
new Product('Chandelier', 'Home Decor', true , 4000),
new Product('Socks', 'Clothing', true , 600),
new Product('Jeans', 'Clothing', true , 400),
new Product('Bread', 'Food', false , 17),
new Product('Oreo', 'Food', false , 45),
new Product('Cheese Puffs', 'Food', false , 15),
new Product('Cereal', 'Food', false , 19),
new Product('Lollipop', 'Food', false , 10),
new Product('Gum', 'Food', true , 5),

]

// * Find all products with price greater than 20.
console.log('products with price greater than 20');

const filteredProducts = products.filter(product => product.price > 20)
console.log(filteredProducts);
       

// * Get the names of all products of Category Food, that are on discount.
console.log('names of all products of Category Food, that are on discount');

let filteredblabla = products.filter(product => product.hasDiscount && product.category === 'Food')
        .map(product => product.name)


// * Get the price of all products that are on discount.
console.log('price of all products that are on discount');

products.filter(product => product.hasDiscount && product.price)
        .map(product => `${product.price}`)
        .forEach(product => console.log(product))


        

// * Find the name and price of all products with name starting with a vowel, that are not on discount.
console.log('name and price of all products with name starting with a vowel, that are not on discount');

const namePriceVowelNoDisc = products
  .filter(product => {
    const firstLetter = product.name[0].toLowerCase();
    const vowel = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
    return vowel && !product.hasDiscount;
  })
  .map(({ name, price }) => console.log(` ${name}, ${price}`));


        




        
        