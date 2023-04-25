//giving the shapes each a class in a seperate js file
class shape {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }

  class square extends shape {
    render() {
      return `<rect width="300" height="100" style="fill:${this.color}" />`;
    }
  }

  class triangle extends shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" style= "fill:${this.color}" />`;
    }
  }

  class circle extends shape {
    render() {
      return `<circle cx="100" cy="100" r="90" style="fill:${this.color}" />`;
    }
  }

  module.exports = { square, triangle, circle };