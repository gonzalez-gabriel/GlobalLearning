function printHello1(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello")
            resolve();
        ;} , time*1000
        );
    });
}

async function printHello(){  
    let time1=4;
    let time2=8;
    await printHello1(time1);
    printHello1(time2);
}

printHello();
