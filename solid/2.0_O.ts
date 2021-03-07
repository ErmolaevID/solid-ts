enum Shape {
  square = "SQUARE",
  circle = "CIRCLE"
}

namespace incorrect {
  class Square {
    private _sideSize: number;
    private _type = Shape.square;

    constructor(sideSize: number) {
      this._sideSize = sideSize;
    }

    public get sideSize(): number {
      return this._sideSize;
    }

    public get type(): Shape {
      return this._type;
    }
  }

  class Circle {
    private _radiusSize: number;
    private _type = Shape.circle;

    constructor(radiusSize: number) {
      this._radiusSize = radiusSize;
    }

    public get radiusSize(): number {
      return this._radiusSize;
    }

    public get type(): Shape {
      return this._type;
    }
  }

  class AreaCalculator {
    private _shapes: any[] = [];

    constructor(shapes: any[]) {
      this._shapes = shapes;
    }

    public calculateAllArea() {
      return this._shapes.reduce((acc: number, shape: any) => {
        if (shape.type === Shape.circle) {
          acc += (shape.radiusSize ** 2) * Math.PI;
        } else if (shape.type === Shape.square) {
          acc += shape.sideSize ** 2;
        }
        return acc;
      }, 0)
    }
  }
  const res = new AreaCalculator([new Square(10), new Circle(5)]);
  console.log(res.calculateAllArea());

  // To add new shapes you need to change the existing calculateAllArea method in AreaCalculator class
}

namespace correct {
  abstract class Shape {
    abstract getArea(): number; 
  }

  class Square extends Shape {
    private _sideSize: number;

    constructor(sideSize: number) {
      super();
      this._sideSize = sideSize;
    }

    public getArea(): number {
      return this._sideSize ** 2;
    }
  }

  class Circle extends Shape {
    private _radiusSize: number;

    constructor(radiusSize: number) {
      super();
      this._radiusSize = radiusSize;
    }

    public getArea(): number {
      return (this._radiusSize ** 2) * Math.PI;
    }
  }

  class AreaCalculator {
    private _shapes: Shape[] = [];
    private _sum: number = 0;

    constructor(shapes: Shape[]) {
      this._shapes = shapes;
    }

    public calculateAllArea() {
      this._shapes.map((e: Shape) => this._sum += e.getArea());
      return this._sum;
    }
  }
  const res = new AreaCalculator([new Square(10), new Circle(5)]);
  console.log(res.calculateAllArea());

  // To add new shapes you do not need to change the existing calculateAllArea method in AreaCalculator class,
  // just create a new class extends Shape
}


// The example is taken from: https://www.youtube.com/watch?v=xq13wiqvcTc (rus)
//                            https://habr.com/ru/company/ruvds/blog/426413/ (rus)