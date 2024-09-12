//Creando arrays

let arr = ["a", "b", "c", "d"]

let arrBuild = new Array()  // Funcion constructora de arrays


/*
Se pueden modificar los valores del array porque no es un data type primitivo

Lo declaramos con const para poder cambiar el valor PERO NO poder redeclararlo
*/




// Indice de los arrays empieza en 0

console.log(arr[1])




// Modificando datos de arrays

// En el caso de trabajar con un array sencillo y saber donde esta lo que queremos cambiar
arr[3] = "Ultimo"

// console.log(arr[3])


/*
En el caso de que tengamos un array muy grande y complicado en el que no sepamos donde esta lo que queremos cambiar

Podemos recorrerlo con un bucle y hacer algo en cada vuelta
*/

for (let i = 0 ; i <= arr.length-1 ; i++) {
    console.log(arr[i])
}




console.log()
// MÉTODOS ARRAYS -> MODIFICA EN MEMORIA EL ARRAY, no te devuelve un arr nuevo y te deja el original intacto

// Por defecto el return que deveulven los metodos de un metodo para modificar arrays es el length del array

// PUSH -> mete al final el valoR


arr.push([0, 1, 2])

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i])
}



// UNSHIFT  -> añade al principio
console.log()


let arr2 = arr.unshift("Primero")  // Aqui el return del unshift es el length del nuevo array por lo que el valor de arr2 ahora seria 6

arr2 = arr 

console.log("Este array está modificado: ")
console.log(arr2)
console.log("Este es el length del nuevo array modificado: ")
console.log(arr2.length)


// SHIFT  -> añade al principio
console.log()

 // El valor de return del shift es lo que quita en este caso "Primero"
console.log(arr.shift())
console.log(arr2)   // El nuveo array esta linkado


// POP  -> Quita el ultimo
console.log()

console.log(arr.pop())   // El valor de return de esto es el elemento que quita


/*
SPLICE -> Podemos hacer muchas cosas
VALOR DE RETURN  -----> SIEMPRE LO QUE ELIMINA, si no eliminas nada su valor es un arr vacio, si metes y borras el valor de return es lo que borras
 
- start: index desde donde empieza a borrar 
- deleteCount: N elementos que borra, si le metes 0 no borra nada
- item item item item: lo que quieres meter a partir de ahi

*/


/*
SLICE -> devuelve una copia del array modificado

- Start: donde empieza a borrar
- deleteCount: donde termina de borrar

NO MODIFICA EL ARR ORIGINAL, devuelve una copia con los cambios que quieras hacerle 

Si le dices que no borre nada devuelve una copia del array 


SIRVE PARA HACER COPIAS DE ARRAYS

declaras un nuevo array que sea igual al slice vacio tienes una copia no linkada al array original

*/


/*
INCLUDES -> busca elementos dentro de un array y si lo incluye devuelve TRUE

incldes("elemento", index a partir del que queremos empezar a buscar)
*/


/*
INDEX OF -> te devuelve el indice de un elemento tras buscarlo en un array

Como si no lo encuentra devuelve un -1 nos sirve para saber si el elemento esta en el array o no

Siempre devuelve el index de la primera coincidencia en el caso de que el elemento apareciera mas de una vez en el array
*/




console.log()
console.log()
console.log()



const usuarios = 
    [ 
        ['Didi', 'didi@d'], 
        [["Cristian", 'Cristian@'], ["primero", "segundo", "tercero", "cuarto"] ],
        ["Marta", "marta@d"],
        ["Pepe", "pepe@d"],
    ]


for (let i = 0 ; i < usuarios.length ; i++) {
    console.log()

    for (let j = 0 ; j < usuarios[i].length ; j++) {

        console.log(usuarios[i][j])

        if (Array.isArray(usuarios[i][j])) {
           
            for (let k = 0; k < usuarios[i][j].length; k++) {

                console.log(usuarios[i][j][k])

            }
    
        } else {
            console.log([i][j])
        }
    }
}

