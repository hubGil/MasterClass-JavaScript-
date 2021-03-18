class Square {
  constructor(side){
    this.side = side;
  }
  calculateArea(){
    return Math.pow(this.side, 2); 
  }

  toString(){
    return `side: ${this.side}\nArea: ${this.calculateArea()}`;
  }
}
const square = new Square(4);
console.log(Square);
console.log(square.toString());