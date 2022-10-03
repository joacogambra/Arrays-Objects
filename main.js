// 1. Crear una variable llamada miNombre y guardar en ella su primer nombre.
let miNombre = "Joaquin"

console.log(miNombre)

// 2. Crear una variable llamada miApellido y guardar en ella su apellido.
const miApellido = "Gambra"

console.log(miApellido)

// 3. Crear una variable llamada miEdad y guardar en ella su edad.
let miEdad = 24

console.log(miEdad)

// 4. Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
let miMascota
miMascota = "chancho"
console.log(typeof miMascota); console.log(miMascota)

// 5. Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
let edadMascota = 3
console.log(edadMascota)

//6. Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
console.log(typeof miNombre)
console.log(typeof miApellido)
console.log(typeof miEdad)
console.log(typeof edadMascota)

// 7. Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
let nombreCompleto = (miNombre + " " + miApellido)
console.log(nombreCompleto)

// 8. Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.
let textoPresentacion = ("Me llamo " + miNombre + " " + miApellido + " tengo " + miEdad + " años y mi mascota se llama " + miMascota + " que tiene" + edadMascota + " años")
console.log(textoPresentacion)

//9. Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
let diferenciaEdades = (miEdad - edadMascota)
console.log(diferenciaEdades)

let multiplicacionEdades = (miEdad * edadMascota)
console.log(multiplicacionEdades)

let divisionEdades = (miEdad / edadMascota)
console.log(divisionEdades)

//10. Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.

// let firstName = prompt('ingrese su primer nombre')
// let lastName = prompt('ingrese su apellido')
// let age = prompt('ingrese su edad')
// let pet = prompt('ingrese nombre de su mascota')
// let petAge = prompt('ingrese edad de su mascota')

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(pet)
// console.log(petAge)

// let completeName = (firstName + " " + lastName)
// console.log(completeName)

// let diferentAge = (age - petAge)
// console.log(diferentAge)
// let ages = (age + petAge)
// console.log(ages)

// 11. Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
let alumno = {
    promedio : 7,
    asistencia : 100,
    entregas : 4,
    edad : 21,
    nombre : 'Pepe' ,
    apellido : 'Gonzalez',
}

console.table(alumno)
console.log(alumno.apellido)

// 12. Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

let mascota = {
    peso : '2kg',
    altura : 25,
    color : 'blanco',
    vacunado : 'si',
    genero : 'hembra'
}

console.table(mascota)
console.log(mascota.color)

// 13. Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
let frutas = ["manzana", 'pera', 'naranja','kiwi', 'apple']
console.log(frutas)
console.log(frutas.length)
console.log(frutas[2])
console.log(frutas[4])

// 14.    Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

let numeros = [0,1,2,10,20,100]
console.log(numeros)
console.log(numeros[3])
console.log(numeros[5])

// 15.    Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.

let familia = [
    {
        nombre : 'padre',
        edad : 50
    },
    {
        nombre: 'madre',
        edad:45
    },
    {
        nombre: 'hijo',
        edad:12
    },
     {
        nombre: 'perro',
        edad:5
    }
]

console.log(familia)

// 16. Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.

let textoAleatorio = (numeros[2] + " " + frutas[3] + " " + "y" + " " + numeros[4] + frutas[0])
console.log(textoAleatorio)