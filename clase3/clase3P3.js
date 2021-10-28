class Developer{
    firstName
    country
    continent
    age
    language

    constructor(firstName, country,continent, age, language){
        this.firstName = firstName;
        this.country = country;
        this.continent = continent;
        this.age = age;
        this.language = language;
    }
}

let dev1 = new Developer ('Sofia', 'Argentina', 'Americas', 35, 'Java');
let dev2 = new Developer ('Lukas', 'Croatia', 'Europe', 35, '¨Python');
let dev3 = new Developer ('Madison', 'United States', 'Americas', 32, 'Ruby');

let list = [dev1, dev2, dev3];
console.log(greeting(list));


function greeting(list){
    return list.map((item) =>{
        item.greeting = `Hi ${item.firstName}, what do you like about ${item.language}?`
        return item;
        })    
}

// return list.map(function a (item){
//     item.greeting = `Hi ${item.firstName}, what do you like about ${item.language}`;
//     return item;
// } )
// }