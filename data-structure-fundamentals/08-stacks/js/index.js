class Stack {
  constructor() {
    this.entries = [];
  }

  size() {
    return this.entries.length;
  }

  empty() {
    return this.size() == 0;
  }

  push(x) {
    this.entries.push(x);
    return this;
  }

  peek() {
    return this.entries[this.entries.length - 1];
  }

  pop() {
    const val = this.peek();

    this.entries.splice(-1, 1);

    return val;
  }
}

module.exports = Stack;
