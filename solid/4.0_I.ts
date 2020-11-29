namespace incorrect {
  interface Programmer {
    writeCode(): void;
    eatPizza(slicesCount: number): void;
  }
  class RegularProgrammer implements Programmer {
    public writeCode(): void {
      console.log("I am writing code");
    }
    public eatPizza(slicesCount: number): void {
      console.log("I am eating");
    }
  }
  class Freelancer implements Programmer {
    public writeCode(): void {
      console.log("I am writing code");
    }
    public eatPizza(slicesCount: number): void {
      // empty
    }
  }
}

namespace correct {
  interface CodeProducer {
    writeCode(): void;
  }
  interface PizzaConsumer {
    eatPizza(slicesCount: number) : void;
  }

  class RegularProgrammer implements CodeProducer, PizzaConsumer {
    public writeCode(): void {
      console.log("I am writing code");
    }
    public eatPizza(slicesCount: number): void {
      console.log("I am eating");
    }
  }
  class Freelancer implements CodeProducer {
    public writeCode(): void {
      console.log("I am writing code");
    }
  }
}



