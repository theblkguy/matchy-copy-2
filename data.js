/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    // Initialize animals variable with an object literal
    var animal = {};
    // Assign animal property
    animal.species = 'cat';
    // assign name key/value pair
    animal['name'] = 'Cable';
    // assign noises key/value pair
    animal.noises = [];
    // print animal object
    console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// initialize a variable with an array literal
var noises = [];
// Add a noise to the array
noises[0] = 'meow';
noises.push('nyan')
noises.unshift('muwa')
noises[noises.length] = 'miau'
console.log(noises.length);
console.log(noises[noises.length]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('purr')
console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);
console.log(animals);

var duck = {species: 'duck', 
            name: 'Jerome', 
            noises: ['quack', 'honk', 'sneeze', 'woosh']};

animals.push(duck);
console.log(animals);

var dog = {species: 'dog',
            name: 'Mac Truck',
            noises: ['woof', 'bark', 'whine', 'Hello!']};

var horse = {species: 'horse',
            name: 'Ed',
            noises: ['neigh', 'well, howdy!']};

animals.push(dog);
animals.push(horse);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []; // I chose an array because it is a good data structure for lists
function getRandom(animals) {
  return Math.floor(Math.random() * animals.length);
}

var random = getRandom(animals);
friends.push(animals[random]['name'])
console.log(friends)

animals[0].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}