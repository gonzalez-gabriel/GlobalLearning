function numForArray(num){
    let array=[];
    for (let i = 0; i < num; i++) {
        array.push(i);
    }
    return array;
}

let array = [];
let num = 5;
array = numForArray(num);

console.log(array);