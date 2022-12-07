class WeightAdviser {
  constructor(user, weight) {
    this.user = user;
    this.weight = weight;
  }

  adviser(expectedWeight) {
    if (this.weight >= expectedWeight) {
      weightAlert(this.user);
    }
  }
  /* Esta parte do código está fazendo com que a classe
faça duas coisas ao mesmo tempo. Informe o peso e dê um alerta
por isso está aqui comentado para que seja criada uma outra
função com este objetivo
  weightAlert() {
    console.log('Acima do peso');
  }
  */
}

function weightAlert(user) {
  console.log(`${user} está acima do peso `);
}

const akbar = new WeightAdviser('Akbar', 117);
akbar.adviser(90);

//Open-Closed Principle

// Se mudar alguma coisa fora, não precisa ter que mudar dentro

class Tax1 {
  constructor(product, price) {
    this.product = product;
    this.price = price;
  }

  totalPrice(tax) {
    console.log(` O valor total é de R$ ${this.price + tax},00`);
  }
}

class Tax2 {
  constructor(product, price) {
    this.product = product;
    this.price = price;
  }

  totalPrice(tax) {
    console.log(`O valor total é de R$ ${this.price + tax}, 00`);
  }
}

class Tax3 {
  constructor(product, price) {
    this.product = product;
    this.price = price;
  }
  totalPrice(tax) {
    console.log(`O valor total é de R$ ${this.price + tax}, 00`);
  }
}

const taxes = [
  new Tax1('snes', 10),
  new Tax2('xbox', 20),
  new Tax3('Playstation', 30),
];

function calculate(taxes) {
  taxes.forEach(tax => console.log(tax.totalPrice(5)));
}

calculate(taxes);

//Liskov principle

class Bird {
  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird {
  dive() {
    return `I can dive`;
  }

  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

// LSP violation

// class Penguin extends Bird {
//   fly() {
//     return new Error("Sorry, I can't fly");
//   }
// }

/* Liskov Substitution Principle
  A ideia principal do princípio é que qualquer função/módulo
  que interaja com uma classe também de ser capaz de interagir
  com todas as subclasses dessa classe. isso siginifica essencialmente
  que uma classe é intercambiável com suas subclasses.
   */

class FlyingBirds {
  fly() {
    console.log('Posso voar');
  }
}

class SwimmingBird {
  swim() {
    console.log('Posso nadar');
  }
}

class Penguin extends SwimmingBird {}
class Duck extends FlyingBirds {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const pato = new Duck();
const pinguim = new Penguin();

makeFlyingBirdFly(pato);
makeSwimmingBirdSwim(pinguim);

/* Interface Segregation Principle
  A ideia é segregar as interfaces e deixá-las menores.
  Pode ser aplicado mesmo não tendo interfaces no JavaScript,
  utilizando classes e heranças
*/

class ProductsEntity {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }
}

class TecProducts extends ProductsEntity {
  constructor(name, dept) {
    super(name, dept);
  }
}

class FoodProducts extends ProductsEntity {
  constructor(name, dept, validDate) {
    super(name, dept);
    this.validDate = validDate;
  }
}

const xbox = new TecProducts('Xbox', 'Tecnologia');
const pipoca = new FoodProducts('Pipoca', 'Alimentícios', 'NOV/2023');
console.log(xbox);
console.log(pipoca);

//Dependency Inversion Principle
// Código acoplado

// class Store {
//   constructor() {
//     this.creditCard = new Visa()
//   }

//   constructor(brand){
//     this.paymentProcess = new PaymentProcess (brand)
//   }
// }

// class PaymentProcess {
//   constructor(brand) {
//     this.brand = brand
//   }
// }

//   payment() {
//     console.log(`Pagou com ${this.brand}`)
//   }

//   class Visa {
//     constructor() {
//       this.brand = 'Visa'
//     }
//   }

// Código desacoplado

class Store {
  constructor(brand) {
    this.paymentProcess = new PaymentProcess(brand);
  }
}

class PaymentProcess {
  constructor(brand) {
    this.brand = brand;
  }
  payment() {
    console.log(`Pagou com ${this.brand}`);
  }
}

// class Visa {
//   constructor() {
//     this.brand = 'Visa'
//   }
// }

const bike = new Store(new PaymentProcess('Visa').payment());
