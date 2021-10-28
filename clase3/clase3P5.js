class Developer{


    constructor(firstName, country,continent, age, language){
        this.firstName = firstName;
        this.country = country;
        this.continent = continent;
        this.age = age;
        this.language = language;
    }
}

let dev1 = new Developer ('Mark', 'Scotland', 'Europe', 22, 'JavaScript');
let dev2 = new Developer ('Victoria', 'Puerto Rico', 'Americas', 30, 'Python');
let dev3 = new Developer ('Emma', 'Norway', 'Europe', 19, 'Python');

let list = [dev1, dev2, dev3];
let str = "python";                           //lenguaje del que quiero saber
console.log(firstDev(list,str));


function firstDev(list,lang) {
    let element = list.find(item=> item.language.toLowerCase() == lang.toLowerCase());
    // console.log(element);
    return element == undefined ? `there are no ${lang} developers in the conference` : `${element.firstName} from ${element.country} was the first ${lang} developer in the conference`;
}