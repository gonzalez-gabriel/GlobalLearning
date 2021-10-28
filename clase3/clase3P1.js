class Hero {
    name
    position
    health
    damage
    exp

    constructor (heroName = "heroe"){
        this.name = heroName;
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.exp = 0;
    }
}

let hero = new Hero ("Goku Uchiha");
console.log(hero);