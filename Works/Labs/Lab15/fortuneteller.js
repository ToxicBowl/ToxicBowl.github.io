var fortunes = [
  // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
  "You will win a million dollars! Yay!",
  "You will step on a piece of gum.",
  "You will be attacked by a fluffy bunny.",
  "Supreme power awaits you in the near future."
];

function tellFortune() {


  // generate a random number between 0 and the number of the array items
  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  console.log("random number: " + randomNumber);

"\n"

 alert("Hello " + document.listform.fn.value + " "+ document.listform.ln.value +
      "\n" + "You were born on: " + document.listform.bd.value + " "
      + "and you have beautiful " + document.listform.ec.value +" eyes. \n"
      + "The fortune teller predicts: \n"
      + JSON.stringify(fortunes[randomNumber]));
}

function reset() {
  // what goes here? (hint: make the fortune div contain an empty string)

}
