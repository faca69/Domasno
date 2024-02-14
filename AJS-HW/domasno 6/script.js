class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  eat(input) {
    if (input instanceof Animal) {
      if (this.type === "herbivore") {
        console.log(
          `The animal ${this.name} is a herbivore and does not eat other animals`
        );
      } else if (this.size < input.size * 2) {
        console.log(
          `The animal ${this.name} tried to eat the ${input.name} but it was too large.`
        );
      } else {
        input.isEaten = true;
        console.log(`The animal ${this.name} ate the ${input.name}`);
      }
    } else {
      console.log(`The animal ${this.name} is eating ${input}`);
    }
  }
}
///////////////////////////////////////////////////////////
class Carnivore extends Animal {
  constructor(name, type, age, size) {
    super(name, type, age, size);
  }
}

class Herbivore extends Animal {
  constructor(name, type, age, size) {
    super(name, type, age, size);
  }
}

class Omnivore extends Animal {
  constructor(name, type, age, size) {
    super(name, type, age, size);
  }
}

///////////////////////////////////////////////////////////

const tiger = new Carnivore("Tiger", "carnivore", 12, 250);
const horse = new Herbivore("Horse", "herbivore", 10, 500);
const chipmunk = new Omnivore("Chipmunk", "omnivore", 6, 15);

tiger.eat(horse); //
tiger.eat(chipmunk); //chipumk is eated TRUE

horse.eat(tiger); //herb doesnt eat other...

chipmunk.eat("nuts");

console.log(tiger);
console.log(horse);
console.log(chipmunk);
