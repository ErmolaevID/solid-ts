enum shapesTypes {
  square = "SQUARE",
  circle = "CIRCLE"
}

namespace incorrect {
  class Square {
    sideSize: number;
    type = shapesTypes.square;
    constructor(sideSize: number) {
      this.sideSize = sideSize;
    } 
  }
  class Circle {
    radiusSize: number;
    type = shapesTypes.circle;
    constructor(radiusSize: number) {
      this.radiusSize = radiusSize;
    }
  }

  class AreaCalculator {
    shapes = [];
    constructor(shpaes: object[]) {
      this.shapes = shpaes;
    }
    public calculateAllArea() {
      return this.shapes.reduce((acc: number, shape) => {
        if (shape.type === shapesTypes.circle) {
          acc += (shape.radiusSize ** 2) * Math.PI;
        } else if (shape.type === shapesTypes.square) {
          acc += shape.sideSize ** 2;
        }
        return acc;
      }, 0)
    }
  }
  const res = new AreaCalculator([new Square(10), new Circle(5)]);
  console.log(res.calculateAllArea());

  // To add new shapes you need to change the existing calculateArea method
}

namespace correct {
  abstract class Shape {
    abstract getArea(): number; 
  }

  class Square extends Shape {
    sideSize: number;
    constructor(sideSize: number) {
      super();
      this.sideSize = sideSize;
    }
    public getArea(): number {
      return this.sideSize ** 2;
    }
  }
  class Circle extends Shape {
    radiusSize: number;
    constructor(radiusSize: number) {
      super();
      this.radiusSize = radiusSize;
    }
    public getArea(): number {
      return (this.radiusSize ** 2) * Math.PI;
    }
  }

  class AreaCalculator {
    shapes = [];
    sum: number = 0;
    constructor(shpaes: object[]) {
      this.shapes = shpaes;
    }
    public calculateAllArea() {
      this.shapes.map(e => this.sum += e.getArea());
      return this.sum;
    }
  }
  const res = new AreaCalculator([new Square(10), new Circle(5)]);
  console.log(res.calculateAllArea());

  // To add new shapes you do not need to change the existing calculateArea method
}


// The example is taken from: https://www.youtube.com/watch?v=xq13wiqvcTc (rus)
//                            https://habr.com/ru/company/ruvds/blog/426413/ (rus)