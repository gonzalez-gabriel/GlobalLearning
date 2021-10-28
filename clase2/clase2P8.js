function eatSheep(array){
    array.reverse();
    let posW = array.indexOf("wolf");
    for (let i=posW; i > 0; i--){
        console.log(`cuidado oveja numero ${i} el lobo está cerca`);
        array.splice(i-1,1);
    }
    console.log("deja de comer ovejas");
}

let array = ["sheep","sheep","wolf","sheep","sheep","sheep","sheep"];
eatSheep(array);
