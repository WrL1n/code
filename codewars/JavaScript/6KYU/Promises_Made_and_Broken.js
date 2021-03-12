/*
##The Misadventures of Bob the Highly Paid Consultant ###Chapter 1: Promises Made and Broken

Your company has purchased a new ordering system and hired Bob the Highly Paid Consultant to develop a front end. However, after continuous delays and missed deliverables, his contract has now come to an end. Bob vanishes like a ghost into the fog, leaving you to see if you can salvage the pieces of his work.

One thing is clear: Bob has left a chain of broken promises in his wake.

Can you help to fix things?

Some notes:

You can assume that the functions Bob is calling actually exist and take the given parameters in the given order.
User "12345" is a valid user for testing
Any provided function whose name ends in Async returns a Promise.
Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().
*/

// My Solution
const submitOrder = user => {
  // Get the current user's shopping cart
  const shoppingCart = OrderAPI.getShoppingCartAsync(user)

  // Also look up the ZIP code from their profile
  const zipCode = CustomerAPI.getProfileAsync(user)
    .then(profile => profile.zipCode)

  // Calculate the shipping fees
  const shippingRate = Promise
    .all([shoppingCart, zipCode])
    .then(data => calculateShipping(data[0], data[1]))

  // Submit the order
  const orderSuccessful =  Promise
    .all([shoppingCart, shippingRate])
    .then(cartAndRate => OrderAPI.placeOrderAsync(cartAndRate[0], cartAndRate[1]))
    .then(orderStatus => console.log(`Your order ${orderStatus ? "was" : "was NOT"} placed successfully`))
}

// Better Solution
async function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;

  // Get the current user's shopping cart
  shoppingCart = await OrderAPI.getShoppingCartAsync(user);

  // Also look up the ZIP code from their profile
  zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;

  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);

  // Submit the order
  orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}

// Another Solution
function submitOrder(user) {
  return Promise.all([
    OrderAPI.getShoppingCartAsync(user),
    CustomerAPI.getProfileAsync(user).then(p => p.zipCode)
  ])
  .then(([shoppingCart, zipCode]) => OrderAPI.placeOrderAsync(shoppingCart, calculateShipping(shoppingCart, zipCode)))
  .then((orderSuccessful) => {
    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
  });
}

// Another Solution
function submitOrder(user) {
  const shoppingCart = OrderAPI.getShoppingCartAsync(user).then(cart => cart);
  const zipCode = CustomerAPI.getProfileAsync(user).then(profile => profile.zipCode);
  
  Promise.all([shoppingCart, zipCode])
    .then(([cart, code]) => {
      const rate = calculateShipping(cart, code);
      OrderAPI.placeOrderAsync(cart, rate).then((success) =>
        console.log(`Your order ${success? "was" : "was NOT"} placed successfully`));
    })
    .catch(err => console.warn(`Error!: ${err}`));
}

// Another Solution
const submitOrder = user => {
  return Promise.all([
  // Get the current user's shopping cart
    OrderAPI.getShoppingCartAsync(user),
  // Also look up the ZIP code from their profile
    CustomerAPI.getProfileAsync(user).then(profile => profile.zipCode)
  ])
  // Calculate the shipping fees and Submit the order
  .then(([shoppingCart, zipCode]) => OrderAPI.placeOrderAsync(shoppingCart, calculateShipping(shoppingCart, zipCode)))
  .then(orderSuccessful => console.log(`Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`))
  .catch(e => console.log(`Error: ${e}`));
};

// Another Solution
const submitOrder = async id => {
  const cart = await OrderAPI.getShoppingCartAsync(id);
  const { zipCode } = await CustomerAPI.getProfileAsync(id);
  const shipping = calculateShipping(cart, zipCode);
  const succ = await OrderAPI.placeOrderAsync(cart, shipping);
}

// Another Solution
async function submitOrder(user) {
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  const zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;
  const shippingRate = calculateShipping(shoppingCart, zipCode);
  const orderSuccessfull = await  OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
