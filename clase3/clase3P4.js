class Developer{


    constructor(firstName, country,continent, age, language){
        this.firstName = firstName;
        this.country = country;
        this.continent = continent;
        this.age = age;
        this.language = language;
    }
}

let dev1 = new Developer ('Emma', 'Netherlands', 'Europe', 29, 'Ruby');
let dev2 = new Developer ('Piotr', 'Poland', 'Europe', 128, 'JavaScript');
let dev3 = new Developer ('Jayden', 'Jamaica', 'Americas', 42, 'JavaScript');

let list = [dev1, dev2, dev3];
let str = 'jAvasCRIpt';           //lenguaje que quiero averiguar si existe 
console.log(xLanguage(list,str));


function xLanguage(list, xL){
    let element;
    element = list.find(item => item.language.toLowerCase() == xL.toLowerCase());
    // return element.length > 0 ? "true" : "false";  //esto es si en lugar de find uso filter
    return element == undefined ? false : true;   
}

