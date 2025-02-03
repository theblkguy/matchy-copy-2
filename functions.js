/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: An array of animals and a string
 * O: an object that has the string as a name property
 * C: N/A
 * E: N/A
 */


    // Initializing search function with an array and a string as params
function search(arr, str){
    let lostAni = arr.find(lostAni => lostAni.name === str)
    if(lostAni) {
        return lostAni;
    } else {
        return null;
    }
}
        


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: An array of animals, a string representing name for search, an object of replacement animal
 * O: if an animal with given name exists in animals array, replace it. Otherwise, do nothing.
 * C: N/A
 * E: N/A
 *  */

function replace(animals, name, replacement) {
        for (var i = 0; i <= animals.length - 1; i++) {
            return animals[i]['name'] === name ? animals.splice(i, 1, replacement)
            : animals
    } 
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**I: an array of animals, name for search query
 * O: If the name exists in the array delete the associated animal
 * C: N/A
 * E: N/A
 */

function remove(animals, name) {
    for (var i = 0; i <= animals.length - 1; i++){
        return animals[i]['name'] === name ? animals.splice(i, 1)
        : animals;
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: An array of animals, an object of a new animal to be added
O: New animal in animals array if it doesn't already exist
C: N/A
E: N/A
*/

function add(animals, animal){
    function objLeng(str){
        return str.length > 0;
    }
    for (var i = 0; i = animals.length - 1; i++) {
        return objLeng(animal['name']) 
        && objLeng(animal['species'])
        && animal['name'] !== animals[i]['name'] 
        ? animals.push(animal) : animals;
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}