namespace incorrect {
  class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    public setWidth(width: number) {
      this.width = width;
    }
    public setHeight(height: number) {
      this.height = height;
    }
    public getArea(): number {
      return this.width * this.height;
    }
  }
  class Square extends Rectangle {
    width: number;
    height: number;
    constructor(size: number) {
      super(size, size);
    }
    public setWidth(width: number) {
      this.width = width;
      this.height = width;
    }
    public setHeight(height: number) {
      this.width = height;
      this.height = height;
    }
  }

  const testShapesSize = (rect: Rectangle) => {
    rect.setHeight(10);
    rect.setWidth(5);
    return rect.getArea() === 50 ? "pass" : "failed";
    // The correct answer for a square is 25 
  }
}

namespace correct {
  interface Shape {
    getArea(): number;
  }
  interface WidthfulShape {
    setWidth(size: number): void;
  }
  interface HeightfulShape {
    setHeight(size: number): void;
  }

  type SquareShape = Shape & WidthfulShape;
  type RectangleShape = Shape & WidthfulShape & HeightfulShape;

  class Square implements SquareShape {
    sideSize: number;
    constructor(sideSize: number) {
      this.sideSize = sideSize;
    }
    public setWidth(size: number): void {
      this.sideSize = size;
    }
    public getArea(): number {
      return this.sideSize ** 2;
    }
  }
  class Rectangle implements RectangleShape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    public setWidth(size: number): void {
      this.width = size;
    }
    public setHeight(size: number): void {
      this.height = size;
    }
    public getArea(): number {
      return this.width * this.height;
    }
  }

  const testRectSize = (rect: Rectangle) => {
    rect.setHeight(10);
    rect.setWidth(5);
    return rect.getArea() === 50 ? "pass" : "failed";
  }
  const testSquareSize = (square: Square) => {
    square.setWidth(10);
    return square.getArea() === 100 ? "pass" : "failed";
  }
}


// The example is taken from: https://ota-solid.now.sh/lsp