// console.log('ciao')
//Recuper l'elemnto nel DOM dove metterò le mie celle
const gridElement = document.querySelector('.grid')
// console.log(gridElement)
for (let i = 1; i <= 100; i++) {
    //Stampo i numeri da 1 a 100
    // console.log(i)
    //Creare un div che avrà la classe cell per creare la "scacchiera"
    const divElement = document.createElement('div')
    // Se è un multiplo di 5 e di 3 dovrò scrivere FizzBuzz
    if (((i % 3) === 0) && ((i % 5) === 0 )) {
        // console.log('FizzBuzz')
        divElement.classList.add('cell_fizzbuzz')
        divElement.append('FizzBuzz')
    } else if ((i % 3) === 0) {
        // Se è un multiplo di 3 dovrò scrivere Fizz al posto del numero
        // console.log('Fizz')
        divElement.classList.add('cell_fizz')
        divElement.append('Fizz')
    } else  if ((i % 5) === 0 ) {
        // Se è un multiplo di 5 dovro scrivere Buzz
        // console.log ('Buzz')
        divElement.classList.add('cell_buzz')
        divElement.append('Buzz')
    } else {
        // Sennò è un numero qualsiasi
        // console.log (i)
        divElement.classList.add('cell_blue')
        divElement.append(i)
    }
    divElement.classList.add('cell')
    // console.log(divElement)
    gridElement.append(divElement)
}
    
    







    
    
    
    
   
   


