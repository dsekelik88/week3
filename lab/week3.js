let numberOfProducts        // expects a Number 
let products                // expects an Array of product data
let promotion1Description   // expects a String describing the promotion
let promotion2Description   // expects a String describing the promotion
let promotion3Description   // expects a String describing the promotion
let promotion1Icon          // expects a String (emoji)
let promotion2Icon          // expects a String (emoji)
let promotion3Icon          // expects a String (emoji)

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.
// Promotions should be displayed with a corresponding icon.
// - 🚛 for shipping
// - 🤑 for discount
// - 🎰 for contest

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript:
//   Math.floor(Math.random() * x)


function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  console.log(database)

  numberOfProducts = database.products.length
  products = database.products

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1
  }

  let promo1rand = getRandomInt(9)
  let promo2rand = getRandomInt(9)
  let promo3rand = getRandomInt(9)

  promotion1Description = database.promotions[promo1rand].description
  promotion2Description = database.promotions[promo2rand].description
  promotion3Description = database.promotions[promo3rand].description

  let promo1randIcon = database.promotions[promo1rand].type
  let promo2randIcon = database.promotions[promo2rand].type
  let promo3randIcon = database.promotions[promo3rand].type

  if (promo1randIcon == 'discount') {
    promotion1Icon = '🤑'
    } else if (promo1randIcon == 'shipping') {
      promotion1Icon = '🚛'
    } else {
      promotion1Icon = `🎰`
    }

    if (promo2randIcon == 'discount') {
      promotion2Icon = '🤑'
      } else if (promo2randIcon == 'shipping') {
        promotion2Icon = '🚛'
      } else {
        promotion2Icon = `🎰`
      }

      if (promo3randIcon == 'discount') {
        promotion3Icon = '🤑'
        } else if (promo3randIcon == 'shipping') {
          promotion3Icon = '🚛'
        } else {
          promotion3Icon = `🎰`
        }

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}