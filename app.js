// Arrow functions
// function sum(num1, num2) {
//   return num1 + num2
// }

let sum = (num1, num2) => num1 + num2

let output = sum(10,7)

console.log(output)

let message = {
  name: 'John',
  // En este caso el this es referente al objeto
  regularFunction: function() {
    console.log('Hello ' + this.name)
  },
  // En este caso el this se busca en un contexto global, por ende no lo encuentra
  arrowFunction: () => console.log('Hi ' + this.name)
}

message.regularFunction()
message.arrowFunction()

// let greeting = function () {
//   return 'Hello World'
// }

// let message = greeting()
// console.log(message)

console.log('################')

// Call Method
let person1 = {name: 'John', age: 22}
let person2 = {name: 'Shara', age: 27}

let sayHi = function() {
  console.log('hi ' + this.name)
}
// Solo se aplica a funciones, se le pasa un parametro (objeto) para que obtenga las propiedades faltantes
sayHi.call(person1)

console.log('################')

// Apply Method
function introduction(name, profession) {
  console.log('My name is ' + name + ' and i am a ' + profession)
}

introduction('Javier', 'Desarrollador')
// Usar cuando sea un array y sean de valores similares
introduction.apply(undefined, ['Jose', 'Diseñador'])
// Usar cuando sea una lista y con distintos tipos de archivos
introduction.call(undefined, 'Maria', 'Mecanica')

console.log('################')

// Bind Method
let people1 = {
  name: 'Sara',
  getName: function() {
    return this.name
  }
}

let people2 = {name: 'John'}
// No se cambia el contexto de la funcion
let getNameCopy = people1.getName.bind(people2)

console.log(getNameCopy())

console.log('################')

// Funciones
// Eval
let x = 1
let y = 2
let s = 'abc'
console.log(eval('x + y + s'))

console.log('################')

// Default parameters
// Declarar los paramatros iniciales siempre despues de los regulares o corrientes
function hello(name = 'World') {
  console.log('Hello ' + name)
}

hello()
hello('Javier')

console.log('################')

// Rest parameters
// Toma los nombres de una x cantidad y los convierte en un array que se puede iterar
function greet(message, ...names) {
  console.log(message + ' a todos')
  names.forEach(name => console.log('hola ' + name))
}

greet('bienvenido', 'Javier', 'Jose', 'Maria')

console.log('################')

// Spread operator
function display(chart1, chart2, chart3, chart4) {
  console.log(chart1, chart2, chart3, chart4)
}

let letters = 'abcd'
let data = ['firts', 'last', 'mid', 'low']
let others = 'abcdsadas'
display(...letters)
display(...data)
display(...others)