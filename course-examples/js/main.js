// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Making a simple variable for the calculator 
const calculator = document.querySelector('.calculator')

// Making a simple variable for the keys - we're looking inside the variable calculator which we've established is the parent div of .calculator which has .calculator__keys children.
const keys = calculator.querySelector('.calculator__keys')


// Adding event listener to our keys
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Do something
    }
})

const key = e.target
const action = key.dataset.action

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

if (action === 'decimal') {
    console.log('decimal key!')
}

if (action === 'clear') {
    console.log('clear key!')
}

if (action === 'calculate') {
    console.log('equal key!')
}