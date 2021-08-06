// class Animal {
//     constructor(name, age, isMammal){
//     this.name = name
//     this.age = age
//     this.isMammal = isMammal
//     }
// }


// class Rabbit extends Animal {
//     constructor(name, age, isMammal) {
//         //super((name, age, isMammal)
//         super(name, age, isMammal)
//         //this.isMammal = isMammal
//     }
    
//     eat() {
//         return `${this.name} sedang makan! ${this.isMammal}`;
//     }
// }

// class Eagle extends Animal {
//     constructor(name, age, isMammal) {
//        // super((name, age, isMammal)
//         super(name, age, isMammal)
//         //this.isMammal = isMammal
//     }
    
//     fly() {
//         return `${this.name} sedang terbang! ${this.isMammal}`;
//     }
// }

// let kelinci = new Rabbit('Labi', 2, true)
// let elang = new Eagle('Elo', 4, false)
// console.log(kelinci.eat()); 
// console.log(elang.fly()); 


class Animal {
    constructor(name, age, isMammal){
    this.name = name
    this.age = age
    this.isMammal = isMammal
    }
}


class Rabbit extends Animal {
    constructor(name, age, isMammal = true) {
        super(name, age)
        this.isMammal = isMammal
    }
    
    eat() {
        return `${this.name} sedang makan! ${this.isMammal}`;
    }
}

class Eagle extends Animal {
    constructor(name, age, isMammal = false) {
        super(name, age)
        this.isMammal = isMammal
    }
    
    fly() {
        return `${this.name} sedang terbang! ${this.isMammal}`;
    }
}

let kelinci = new Rabbit('Labi', 2)
let elang = new Eagle('Elo', 4)
console.log(kelinci.eat(), kelinci); 
console.log(elang.fly(), elang);