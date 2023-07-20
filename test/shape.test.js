const { Triangle, Circle, Square } = require("../lib/classes");
describe("Triangle color test", () => {
  test("test for a triangle with grey background", () => {
    const shape = new Triangle();
    shape.setColor("grey");
    expect(shape.render()).toEqual(
      '<polygon points="150,18 244, 182 56,182" fill="grey"/>'
    );
  });
}),
  describe("Circle color test", () => {
    test("test for a circle with black background", () => {
      const shape = new Circle();
      shape.setColor("#000");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#000"/>'
      );
    });
  }),
  describe("Square test", () => {
    test("test for a Square with red background", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="red"/>'
      );
    });
  });
