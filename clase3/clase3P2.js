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

let dev1 = new Developer ('Noah', 'Switzerland', 'Europe', 19, 'JavaScript');
let dev2 = new Developer ('Carla', 'Tahití', 'Oceanía', 28, 'JavaScript');
let dev3 = new Developer ('María', 'Taiwan', 'Asia', 35, 'HTML');
let dev4 = new Developer ('Ramiro', 'Tajikistan', 'Asia', 30, 'CSS');

const list = [dev1, dev2, dev3, dev4];
console.log(`La cantidad de europeos es ${european(list)}`);

function european (list){
    let count;
    count=list.filter(item => item.continent.toLowerCase() == 'europe' );
    return count.length;
}
