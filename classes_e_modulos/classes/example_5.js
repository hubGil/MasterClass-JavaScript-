// class Square {
//   constructor(side){
//     this.side = side;
//   }
//   calculateArea(){
//     return Math.pow(this.side, 2); 
//   }
//   toString(){
//     return `side: ${this.side}\nArea: ${this.calculateArea()}`;
//   }
//   static fromArea(area){
//     return new Square(Math.sqrt(area));
//   }
// }

function Square(side){
  this.side = side;
}
Square.prototype.calculateArea =function(){
  return Math.pow(this.side, 2);
}

Square.prototype.toString = function() {
  return `side: ${this.side}\narea: ${this.calculateArea()}`
}

Square.fromArea = function(area) {
  return new Square(Math.sqrt(area));
}

const square = Square.fromArea(16);
console.log(Square);
console.log(square.toString());