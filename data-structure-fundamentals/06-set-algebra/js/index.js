class MySet {
  constructor(...args) {
    this.data = new Map();

    args.forEach((arg) => {
      this.data.set(arg, 1);
    });

    this.length = this.data.size;
  }

  add(el) {
    this.data.set(el, 1);
    this.length = this.data.size;

    return this;
  }

  remove(el) {
    this.data.delete(el);
    this.length = this.data.size;

    return this;
  }

  empty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toList() {
    return [...this.data.keys()];
  }

  has(el) {
    return this.data.has(el);
  }

  equals(other) {
    const reducer = (a, e) => a && other.has(e);

    return (this.size() == other.size()) && this.toList().reduce(reducer, true);
  }

  union(other) {
    return MySet.createFrom(this.toList().concat(other.toList()));
  }

  intersection(other) {
    return MySet.createFrom(this.toList().filter(e => other.has(e)));
  }

  difference(other) {
    return MySet.createFrom(this.toList().filter(e => !other.has(e)));
  }

  symmetricDifference(other) {
    return MySet.fromSet(this.difference(other).union(other.difference(this)));
  }

  static createFrom(list) {
    //return new (Function.prototype.bind.apply(MySet, [null].concat(list)));
    const set = new MySet();

    list.forEach(function(el) {
      set.add(el, 1);
    });

    return set;
  }

  static fromSet(set) {
    return MySet.createFrom(set.toList())
  }
}

module.exports = MySet;
