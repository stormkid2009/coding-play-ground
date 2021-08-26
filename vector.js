class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

Vec.prototype.plus = function(element){
    return new Vec(this.x + element.x,this.y + element.y)
};
Vec.prototype.minus = function(element){
    return new Vec(this.x -element.x ,this.y - element.y)
}

let Test = new Vec(3,4);
let Test1 = new Vec(5,5);
console.log(Test1.minus(Test));
console.log(Test1.plus(Test));
