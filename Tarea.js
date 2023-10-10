const names = new Array ("jhon", "mary", "jane", "mark", "bob");
console.log (names)
console.log (typeof(names))

// [ ]   { }

const names_array = [ "jhon", "mary", "jane", "mark", "bob"];
console.log (names_array) 
console.log (typeof(names_array))


console.log (names_array  [2] )

console.log (names_array.length)



for (let i = 0; i <=4; i++) {
    console.log (names_array [i] )
}


for (let i = 0; i < names_array.length; i++) {
    console.log (names_array [i] )

}


for (let i = 0; i < names_array.length; i= i+2) {
    console.log (names_array [i] )

}


for (let i = 0; i < names_array.length; i++) {
    console.log (names_array [i] )

}


for (let i = 0 ; i < names_array ; i++) { 
if ( names_array [i]! = undefined) {
    console.log (names_array)

           }
}








names_array.push ("pedro")
console.log (names_array)

names_array[1] = "maria"
console.log (names_array)

names_array [8] = ("joao")
console.log (names_array)

delete names_array [1]
console.log (names_array) 

names_array.splice (1,1)
console.log (names_array)


names_array.sort ()
console.log (names_array)

