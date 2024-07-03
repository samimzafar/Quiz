function Animal() {
    this.speak = function () {
        console.log("Animal is speaking");
    };
    this.eat = function () {
        console.log("Animal is eating");
    };
}

function Dog(value) {
    this.value = value;
}

Dog.prototype = new Animal();

Dog.prototype.speak = function () {
    console.log(`${this.value} is speaking`);
};

Dog.prototype.eat = function () {
    console.log(`${this.value} is eating`);
};

const dog = new Dog("Dog");
dog.speak();
dog.eat();