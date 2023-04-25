const { square, triangle, circle } = require('./shapes');

describe("square", () => {
    test("for the color in the square shape", () => {
      const shape = new square();
      shape.setColor("#202C59");
      expect(shape.render()).toEqual(
        '<rect width="200" height="200" style="fill:#202C59" />'
      );
    });
  });

  describe("triangle", () => {
    test("for the color in the triangle shape", () => {
      const shape = new triangle();
      shape.setColor("#885A89");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" style= "fill:#885A89" />'
      );
    });
  });

  describe("circle", () => {
    test("for the color in the circle shape", () => {
      const shape = new circle();
      shape.setColor("#ca00ca");
      expect(shape.render()).toEqual(
        '<circle cx="100" cy="100" r="90" style="fill:#ca00ca" />'
      );
    });
  });