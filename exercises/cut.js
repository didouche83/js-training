'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 

 function cutFirst(chaine){
	return chaine.substr(0,1)		
}

function cutLast (chaine) {
	return chaine.substr(chaine.length - 2)
}

//* Begin of tests
const assert = require('assert')



assert.fail('You must write your own tests')
// End of tests */
