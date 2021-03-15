const rectangle = {};
Object.defineProperty(rectangle, "x", {
  set(x){
    if (x > 0) {
      this._x = x;
    } else {
      console.log("Invalid value for X");
    }
  }
});
Object.defineProperty(rectangle, "y", {
  set(y){
    if (y > 0) {
      this._y = y;
    } else {
      console.log("Invalid value for Y");
    }
  }
})

Object.defineProperty(rectangle, "area", {
  get (){
    return this.x * this.y;
  }
})
rectangle.x = -10;
rectangle.y = 2;
console.log(rectangle.area);