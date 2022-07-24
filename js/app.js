// console.log('ciao')
const gridElement = document.getElementsByClassName('grid')
console.log(gridElement)
gridElement.innerHTML = ''

for (let i = 1; i <= 100; i++) {
    //Stampo i numeri da 1 a 100
    // console.log(i)
    // Se è un multiplo di 5 e di 3 dovrò scrivere FizzBuzz
    if (((i % 3) === 0) && ((i % 5) === 0 )) {
        console.log('FizzBuzz')
    } else if ((i % 3) === 0) {
        // Se è un multiplo di 3 dovrò scrivere Fizz al posto del numero
        console.log('Fizz')
    } else  if ((i % 5) === 0 ) {
        // Se è un multiplo di 5 dovro scrivere Buzz
        console.log ('Buzz')
    } else {
        // Sennò è un numero qualsiasi
        console.log (i)
    }
}

    
    
    
    
   
   


