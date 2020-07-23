/* global Product, Cart */

'use strict';

/*
Process: read through so you understand it
2. Plan 1 todo: find something that isn't happening and the TODO that matches it
3. Plan around the todo, console log if needed, figure out your variables
4. Finish the todo

5. Repeat step 2-4 : find something missing from the flow of the app, missing from the user experience
*/

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  // make an option, append it to items, give it content FOR EACH thing in Product.allProducts
  for (var i in Product.allProducts) {
    var optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var getItem = document.getElementById('items');
  var getQty = document.getElementById('quantity');

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var mySelectedItems = (event.target.items.value + event.target.quantity.value);
  var list = document.getElementById('cartContents');
  var listItems = document.createElement('li');
  listItems.textContent = (mySelectedItems);
  list.appendChild(listItems);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
