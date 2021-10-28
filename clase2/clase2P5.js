let array = [4,4,4,4,4,1,4];
let value;
value = distinto(array);
console.log(value);

function distinto (array) {
    let array1=array;
    array1.sort();
    if(array1[0] != array[1]){
        return array1.shift();
    }
    else{
        return array1.pop();
    }
}

//array.find(item=> array.indexOf(item) == array.lastIndexOf(item))