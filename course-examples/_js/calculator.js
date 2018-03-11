// This is Us grabbing the calculator from our HTML page with it's class
const calculator = document.querySelector('.calculator')

// This is Us grabbing the keys from within the established variable (calculator) just above - using the class of .calculator__keys 
const keys = calculator.querySelector('.calculator__keys')


keys.addEventListener("click", e => {
    if (e.target.matches('button')){
        // Do Something
    }
})

// Okay so what we're looking at here is we're taking the keys variable, that we've declared eariler - so its going to go through all the elements with the class of .calculator__keys and add a "click" event to each. 

// The if-statement wrapped in there is checking to see if the target-clicked "matches" button - if true, it'll fire off some code - in our case it'll add the digit/operator but we'll get to add that info in later on down in this file.

// Next we'll need to check the type of key the user has pressed using the data-action attribute


const key = e.target
const action = key.dataset.action

if (!action){
    console.log('number key!')
}