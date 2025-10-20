
import espresso1 from './assets/products/coffee1.jpg';
import espresso2 from './assets/products/coffee2.jpg';
import cappuccino1 from './assets/products/coffee3.jpg';
import cappuccino2 from './assets/products/coffee4.jpg';
import mocha1 from './assets/products/coffee5.jpg';
import mocha2 from './assets/products/coffee6.jpg';
import americano1 from './assets/products/coffee7.jpg';
import americano2 from './assets/products/coffee8.jpg';
import latte1 from './assets/products/coffee9.jpg';
import latte2 from './assets/products/coffee10.jpg';
import coldbrew1 from './assets/products/coffee11.jpg';
import coldbrew2 from './assets/products/coffee12.jpg';
import icedamericano1 from './assets/products/coffee13.jpg';
import icedamericano2 from './assets/products/coffee14.jpg';
import hazelnutlatte1 from './assets/products/coffee15.jpg';
import hazelnutlatte2 from './assets/products/coffee16.jpg';
import vanillacappuccino1 from './assets/products/coffee17.jpg';
import vanillacappuccino2 from './assets/products/coffee18.jpg';
import macchiato1 from './assets/products/coffee19.jpg';
import macchiato2 from './assets/products/coffee20.jpg';
import flatwhite1 from './assets/products/coffee21.jpg';
import flatwhite2 from './assets/products/coffee22.jpg';
import darkroast1 from './assets/products/coffee23.jpg';
import darkroast2 from './assets/products/coffee24.jpg';
import frenchvanilla1 from './assets/products/coffee25.jpg';
import frenchvanilla2 from './assets/products/coffee26.jpg';
import irishlatte1 from './assets/products/coffee27.jpg';
import irishlatte2 from './assets/products/coffee28.jpg';
import doubleshot1 from './assets/products/coffee29.jpg';
import doubleshot2 from './assets/products/coffee30.jpg';
import mochahazelnut1 from './assets/products/coffee31.jpg';
import mochahazelnut2 from './assets/products/coffee32.jpg';

// --------- Product Data ---------
const products = [
  { id: 1, name: 'Espresso Classic', category: 'Espresso', brand: 'Lavazza', price: 6.99, rating: 4.7, inStock: true, description: 'Rich and bold espresso with a smooth crema.', image: espresso1 },
  { id: 2, name: 'Espresso Strong', category: 'Espresso', brand: 'Illy', price: 7.49, rating: 4.8, inStock: true, description: 'Strong espresso for true coffee lovers.', image: espresso2 },
  { id: 3, name: 'Cappuccino Delight', category: 'Cappuccino', brand: 'Nescafé', price: 7.49, rating: 4.6, inStock: true, description: 'Creamy cappuccino with perfect espresso and milk foam.', image: cappuccino1 },
  { id: 4, name: 'Cappuccino Vanilla', category: 'Cappuccino', brand: 'Costa Coffee', price: 7.99, rating: 4.7, inStock: true, description: 'Cappuccino infused with vanilla flavor.', image: cappuccino2 },
  { id: 5, name: 'Mocha Dream', category: 'Mocha', brand: 'Starbucks', price: 8.29, rating: 4.8, inStock: true, description: 'Decadent mocha with premium cocoa.', image: mocha1 },
  { id: 6, name: 'Mocha Hazelnut', category: 'Mocha', brand: 'Illy', price: 8.39, rating: 4.7, inStock: true, description: 'Rich mocha blended with hazelnut syrup.', image: mocha2 },
  { id: 7, name: 'Americano Smooth', category: 'Americano', brand: 'Costa Coffee', price: 5.99, rating: 4.4, inStock: true, description: 'Smooth Americano made with freshly brewed espresso.', image: americano1 },
  { id: 8, name: 'Americano Classic', category: 'Americano', brand: 'Lavazza', price: 6.49, rating: 4.5, inStock: true, description: 'Classic Americano with rich aroma.', image: americano2 },
  { id: 9, name: 'Latte Caramel', category: 'Latte', brand: 'Illy', price: 7.99, rating: 4.9, inStock: true, description: 'Silky caramel latte with rich aroma.', image: latte1 },
  { id: 10, name: 'Hazelnut Latte', category: 'Latte', brand: 'Nescafé', price: 8.19, rating: 4.7, inStock: true, description: 'Rich hazelnut flavor blended with milk and espresso.', image: latte2 },
  { id: 11, name: 'Cold Brew Classic', category: 'Cold Brew', brand: 'Blue Bottle', price: 6.49, rating: 4.5, inStock: true, description: 'Slow-brewed cold coffee.', image: coldbrew1 },
  { id: 12, name: 'Cold Brew Vanilla', category: 'Cold Brew', brand: 'Starbucks', price: 6.79, rating: 4.6, inStock: true, description: 'Cold brew with subtle vanilla notes.', image: coldbrew2 },
  { id: 13, name: 'Iced Americano', category: 'Cold Coffee', brand: 'Starbucks', price: 5.49, rating: 4.3, inStock: true, description: 'Chilled espresso with ice.', image: icedamericano1 },
  { id: 14, name: 'Iced Latte', category: 'Cold Coffee', brand: 'Costa Coffee', price: 6.29, rating: 4.5, inStock: true, description: 'Iced latte with milk and espresso.', image: icedamericano2 },
  { id: 15, name: 'Vanilla Cappuccino', category: 'Cappuccino', brand: 'Costa Coffee', price: 7.59, rating: 4.6, inStock: true, description: 'Cappuccino with vanilla-infused milk foam.', image: vanillacappuccino1 },
  { id: 16, name: 'Irish Latte', category: 'Latte', brand: 'Starbucks', price: 8.49, rating: 4.9, inStock: true, description: 'Espresso with Irish cream flavor.', image: vanillacappuccino2 },
  { id: 17, name: 'Macchiato Bold', category: 'Macchiato', brand: 'Lavazza', price: 6.79, rating: 4.5, inStock: true, description: 'Bold espresso shot with frothy milk.', image: macchiato1 },
  { id: 18, name: 'Macchiato Classic', category: 'Macchiato', brand: 'Illy', price: 7.19, rating: 4.6, inStock: true, description: 'Classic macchiato with rich flavor.', image: macchiato2 },
  { id: 19, name: 'Flat White Signature', category: 'Flat White', brand: 'Blue Bottle', price: 7.29, rating: 4.8, inStock: true, description: 'Velvety flat white with microfoam.', image: flatwhite1 },
  { id: 20, name: 'Flat White Latte', category: 'Flat White', brand: 'Nescafé', price: 7.49, rating: 4.7, inStock: true, description: 'Smooth flat white latte.', image: flatwhite2 },
  { id: 21, name: 'Dark Roast Classic', category: 'Brewed Coffee', brand: 'Illy', price: 5.89, rating: 4.4, inStock: true, description: 'Intense dark roast coffee.', image: darkroast1 },
  { id: 22, name: 'Dark Roast Strong', category: 'Brewed Coffee', brand: 'Lavazza', price: 6.19, rating: 4.5, inStock: true, description: 'Bold dark roast coffee.', image: darkroast2 },
  { id: 23, name: 'French Vanilla Brew', category: 'Brewed Coffee', brand: 'Nescafé', price: 6.29, rating: 4.5, inStock: true, description: 'Smooth French vanilla coffee.', image: frenchvanilla1 },
  { id: 24, name: 'French Vanilla Latte', category: 'Brewed Coffee', brand: 'Starbucks', price: 6.59, rating: 4.6, inStock: true, description: 'French vanilla with espresso and milk.', image: frenchvanilla2 },
  { id: 25, name: 'Irish Cream Latte', category: 'Latte', brand: 'Starbucks', price: 8.49, rating: 4.9, inStock: true, description: 'Premium espresso with Irish cream.', image: irishlatte1 },
  { id: 26, name: 'Irish Latte Vanilla', category: 'Latte', brand: 'Illy', price: 8.69, rating: 4.8, inStock: true, description: 'Irish cream with vanilla notes.', image: irishlatte2 },
  { id: 27, name: 'Double Shot Espresso', category: 'Espresso', brand: 'Lavazza', price: 7.19, rating: 4.8, inStock: true, description: 'Two espresso shots for bold flavor.', image: doubleshot1 },
  { id: 28, name: 'Double Shot Mocha', category: 'Mocha', brand: 'Illy', price: 8.49, rating: 4.8, inStock: true, description: 'Double espresso with chocolate.', image: doubleshot2 },
  { id: 29, name: 'Mocha Hazelnut Delight', category: 'Mocha', brand: 'Nescafé', price: 8.59, rating: 4.7, inStock: true, description: 'Mocha with extra hazelnut syrup.', image: mochahazelnut1 },
  { id: 30, name: 'Mocha Almond', category: 'Mocha', brand: 'Costa Coffee', price: 8.79, rating: 4.6, inStock: true, description: 'Mocha with almond flavor.', image: mochahazelnut2 },
  { id: 31, name: 'Espresso Vanilla Shot', category: 'Espresso', brand: 'Starbucks', price: 7.29, rating: 4.8, inStock: true, description: 'Espresso with vanilla shot.', image: espresso1 },
  { id: 32, name: 'Latte Mocha', category: 'Latte', brand: 'Blue Bottle', price: 8.39, rating: 4.7, inStock: true, description: 'Latte with chocolate and espresso.', image: latte1 },
  { id: 33, name: 'Espresso Vanilla Shot', category: 'Espresso', brand: 'Starbucks', price: 7.29, rating: 4.8, inStock: true, description: 'Espresso with vanilla shot.', image: hazelnutlatte2 },
  { id: 34, name: 'Latte Mocha', category: 'Latte', brand: 'Blue Bottle', price: 8.39, rating: 4.7, inStock: true, description: 'Latte with chocolate and espresso.', image: hazelnutlatte1 }
];

export default products;
