function adyEP(array){
    let prod = 0;
    for (let i = 0; i < array.length-1;i++){
        if(array[i]*array[i+1] > prod){
            prod = array[i]*array[i+1];
        }
    }
    console.log(prod);
}

let array = [9,5,10,2,20,50];
adyEP(array);