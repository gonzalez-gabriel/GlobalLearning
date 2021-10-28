let array = [0,1,2,3,4];

let array1 = delete3E (array);

console.log(array1);

function delete3E (array){
    if (array.length > 5){
        array.splice(array.length-3);
        return array;
    }
    else{
        console.log("no se ingresó un array mayor a 5");
        return array;
    }
}