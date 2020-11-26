namespace incorrect {
  class Order {
    private _shipping: string;

    // getTotal()

    public getShippingCost() {
      if (this._shipping === "ground") {
        // if (this.getTotal() > 100)...
      }
      else if (this._shipping === "air") {
        // if (this.getTotal() > 100)...
      }
    }
  }
  // To add a new shipping way (like train) we need to change getShippingCost method in Order class
}

namespace correct {
  interface Shipping {
    getCost(order: Order): number;
    getDate(order: Order): Date;
  }

  class Order {
    // itemsList...
    private _shipping: Shipping;

    // getTotal()...

    public getShippingCost() {
      return this._shipping.getCost(this);
    }
  }

  class Ground implements Shipping {
    public getCost(order: Order): number {
      // if (order.getTotal() > 100)...
      return 5;
    }

    public getDate(order: Order): Date {
      return new Date(Date.now());
    }
  }

  class Air implements Shipping {
    public getCost(order: Order): number {
      // if (order.getTotal() > 100)...
      return 10;
    }

    public getDate(order: Order): Date {
      return new Date(Date.now());
    }
  }
  // To add a new shipping way (like train) we need to create a new class implements Shipping interface
  // and do not need to change Order class
}

// The example is taken from: https://refactoring.guru/ru/design-patterns/book (rus)