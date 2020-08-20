namespace incorrect {
  class Order {
    public calculateTotalSum() {}
    public addItem() {}
    public deleteItem() {}
    public getItemCount() {}
  
    public printOrder() {}
    public showOrder() {}
  
    public load() {}
    public save() {}
    public update() {}
    public delete() {}
  }
}

namespace correct {
  class Order {
    public calculateTotalSum() {}
    public addItem() {}
    public deleteItem() {}
    public getItemCount() {}
  }

  class OrderView {
    public printOrder() {}
    public showOrder() {}
  }

  class OrderDB {
    public load() {}
    public save() {}
    public update() {}
    public delete() {}
  }
}


// The example is taken from: https://habr.com/ru/post/208442/ (rus)