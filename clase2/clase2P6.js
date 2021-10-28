//podria hacerlo exactamente igual al 5
function minSum (array){
    let array1 = array;
    let pos1= array1.indexOf(Math.min(...array1));
    let num1 = array1[pos1];
    array1.splice(pos1,1);
    let pos2 = array1.indexOf(Math.min(...array1));
    let num2 = array1[pos2];
    // array1.splice(pos2, 1);
    return num1 + num2;
}
let array = [1,9,7,8,10,3,2];
let suma = minSum(array);
console.log(suma);
