let array = [1,2,3,4,5];
let num = 4;

function addNumber (array, num){
    for(pos in array){
        array[pos]+=num;
    }
}
console.log(array);
addNumber(array,num);
console.log(array);
