/*Input: string "Hola!, bienvenidos a este ejercicio de programación para determinar el uso de las hash tables, lo cual les va a permitir incrementar su conocimiento sobre el manejo de estructura de datos"

Problema: Listar las palabras y su número de repeticiones de la oración dada.

Output:

Hola: 1,
bienvenidos: 1,
de: 3

Constraint: se espera que se eviten soluciones cuadráticas, es decir, el anidamiento de bucles debido que se busca cuidar el performance en la búsqueda.
*/

const mapWords = new Map()
const input = "Hola!, bienvenidos a este ejercicio de programación para determinar el uso de las hash tables, lo cual les va a permitir incrementar su conocimiento sobre el manejo de estructura de datos"
const arrayOfStrings = input.split(' ')
arrayOfStrings.forEach((word) => {
  if(mapWords.has(word)) {
    aux = mapWords.get(word)
    mapWords.delete(word)
    mapWords.set(word, aux + 1)
  } else {
  mapWords.set(word, 1)
  }
})
console.log(mapWords)