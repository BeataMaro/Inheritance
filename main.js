// IntBuilder ES6

class IntBuilder {
  constructor(int = 0) {
    this.int = int;
  }

  // take infinite number of integers and sum all with stored value;
  plus(...n) {
    let result = [...n, this.int].reduce((sum, numb) => sum + numb);
    return result;
  }
  // take infinite number of integers and subtract from stored value;
  minus(...n) {
    let result = [this.int, ...n].reduce((result, numb) => result - numb);
    return result;
  }
  // multiply param n on stored value;
  multiply(n) {
    return this.int * n;
  }
  // leaves integer part of division stored value on n;
  divide(n) {
    return Math.floor(this.int / n);
  }
  // leaves remainder of the division stored value with on n;
  mod(n) {
    return this.int % n;
  }
  // returns stored value;
  get() {
    return this.int;
  }
  // static method; from, to: integer; values limits the range of random values; 
  static random(from, to) {
    return Math.floor(Math.random() * (to - from) + from)
  }   
}

const intBuilder = new IntBuilder();
console.log(intBuilder.plus(1, 2, 3));
console.log(intBuilder.minus(90));
console.log(intBuilder.multiply(3));
console.log(intBuilder.divide(2));
console.log(intBuilder.mod(24));
console.log(intBuilder.get());
console.log(IntBuilder.random(20, 50));

//*****
// StringBuilder ES5
