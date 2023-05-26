// Function to check if all capybaras are white
function areAllCapybarasWhite(capybaras) {
  return capybaras.every(capybara => capybara === 'white');
}

// An array representing capybaras owned as per Statement A, it's empty because Person A has no capybaras 
const capybarasA = [];

// Check if every capybara owned by Person A is white
const allCapybarasAreWhiteA = areAllCapybarasWhite(capybarasA);

console.log(`Person A in Statement A: ${allCapybarasAreWhiteA}`); // This will log true due to vacuous truth, because the array is empty

// An array representing capybaras owned as per Statement B, they have at least one capybara that is not white
const capybarasB = ['white', 'black'];

// Check if every capybara owned by Person A is white
const allCapybarasAreWhiteB = areAllCapybarasWhite(capybarasB);

console.log(`Person A in Statement B: ${allCapybarasAreWhiteB}`); // This will log false, because there is at least one capybara that is not white
