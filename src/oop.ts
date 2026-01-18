class Pizza {
  constructor(
    public type: string,
    public price: number,
  ) {
    this.type = type;
    this.price = price;
  }
}

const pizza1 = new Pizza("corn", 199);

class Pizza1 {
  public type: string = "VegExtravaganza"; // everywhere
  #balance: number = 100; // another syntax for private
  private secretIngredient: string = "oregano"; // only in base class
  reveal() {
    console.log(this.secretIngredient); // cant be directly accessed , only through functions
    console.log(this.#balance);
  }
  protected shopName: string = "Denny's"; // base and inherited class
}

class Cup {
  readonly capacity: number = 350;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// GETTTERS , SETTERS

class modernClass {
  private _sugar: number = 2; // _ -> private variables naming convention
  //getter
  get sugar() {
    return this._sugar;
  }
  // setter
  set sugar(val: number) {
    if (val > 5) throw new Error("Too sweet");
    this._sugar = val;
  }
}

const c = new modernClass();
c.sugar = 3;

// static members

class StaticClass {
  static name: string = "Parth";
}

console.log(StaticClass.name);

// abstract class (abstract classes are never used to make objects, they're used to define functions mostly)

abstract class Drink {
  abstract make(): void;
}

class myDrink extends Drink {
  make(): void {
    console.log(`Making a drink`);
  }
}

// composition of classes (another way of inheritance)

class Heater {
  heat() {}
}

class CoffeMaker {
  constructor(public heater: Heater) {}
  make() {
    this.heater.heat();
  }
}

