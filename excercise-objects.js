// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }

  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}


class Group {

  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    const index = this.members.indexOf(value);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  has(value) {
    return this.members.indexOf(value) !== -1;
  }

  static from(iterable) {
    const group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false



// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    const index = this.members.indexOf(value);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  has(value) {
    return this.members.indexOf(value) !== -1;
  }

  static from(iterable) {
    const group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    let index = 0;
    let members = this.members;
    return {
      next() {
        if (index >= members.length) {
          return { done: true };
        } else {
          return { value: members[index++], done: false };
        }
      }
    };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}


// Can you think of a way to call hasOwnProperty on an object that has its own property by that name?

// let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty("one"));


Answer: 
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
