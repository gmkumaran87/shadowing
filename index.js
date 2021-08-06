// Shadowing in JS

/* Variable shadowing occurs when a variable of an inner scope is defined with the same name as a variable in the outer scope. 
In the inner scope, both variables’ scope overlap. */

let points = 10;

function displayDouble() {
    let number = 2;
    number = points * number; // variable 'points' is accessible in the inner scope
    console.log(number); //=> 20
}

displayDouble();


// Example 2
let number = 10;

function displayDouble() {
    //a new variable is defined with the same name as variable on line 1 - outer scope
    let number = 3;

    number *= 2;
    console.log(number); //=> 6
}

displayDouble();
console.log(number); //=> 10

/* Firstly, it prevents inner scope to access variables defined in the outer scope. 
Secondly, it prevents inner scope to modify or reassign variables defined in the outer scope.*/

//Shadowing can lead to unintended consequences, such as accessing one variable when the intention was to have accessed another.


// Example 3
let employee = 'Liza';

['Lucia', 'James', 'Vera'].forEach(employee => {
    //variable 'employee' defined on line 1 is accessible in the inner scope.
    console.log(employee); // Liza Liza Liza (repeated three times in each loop)
    console.log(engineer); // Lucia James Vera
});

// Avoid
//Variable shadowing could be avoided by simply renaming variables with unambiguous names. We could rewrite the previous examples:

let employee = 'Liza';

['Lucia', 'James', 'Vera'].forEach(engineer => {
    //variable 'employee' defined on line 1 is accessible in the inner scope.
    console.log(employee); // Liza Liza Liza (repeated three times in each loop)
    console.log(engineer); // Lucia James Vera
});


// Temporal Dead Zone

/* Variables declared with let are still hoisted, but they don't automatically receive a value of undefined the way variables declared with var do. 
 This gap between when a variable declared with let is hoisted and when it actually gets declared is known as the temporal dead zone.*/