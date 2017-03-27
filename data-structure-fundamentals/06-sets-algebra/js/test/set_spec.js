const expect = require('chai').expect;
const MySet = require('../index');

/*
create(): creates a new, initially empty set structure.
build(x1,x2,…,xn,): creates a set structure with values x1,x2,…,xn.
create_from(collection): creates a new set structure containing all the elements of the given collection
                         or all the elements returned by the given iterator.
add(S,x): adds the element x to S, if it is not present already.
remove(S, x): removes the element x from S, if it is present.
is_empty(S): checks whether the set S is empty.
size(S) or cardinality(S): returns the number of elements in S.
enumerate(S): returns a list containing the elements of S in some arbitrary order.
is_element_of(x,S): checks whether the value x is in the set S.

union(S,T): returns the union of sets S and T.
intersection(S,T): returns the intersection of sets S and T.
difference(S,T): returns the difference of sets S and T.
subset(S,T): a predicate that tests whether the set S is a subset of set T.
 */

describe('MySet', function() {
  describe('Initialization', function() {
    it('can be created empty', function() {
      expect(new MySet()).to.have.lengthOf(0);
    });

    it('can be populated from arguments', function() {
      expect(new MySet(1,2,3)).to.have.lengthOf(3);
    });

    it('can be populated from a list', function() {
      expect(MySet.createFrom([1,2,3])).to.have.lengthOf(3);
    });

    it('only contains unique elements', function() {
      expect(new MySet(1,1,1)).to.have.lengthOf(1);
    });
  });

  describe('Basic operations', function() { 
    it('can add a new element to set', function() {
      const subject = new MySet();

      subject.add(1);

      expect(subject).to.have.lengthOf(1);
    });

    it('can remove elements from a set', function() {
      const subject = new MySet(1,2,3);

      subject.remove(1);

      expect(subject).to.have.lengthOf(2);
    });

    it('can determine when empty', function() {
      expect((new MySet()).empty()).to.be.true;
    });

    it('can return cardinality', function() {
      expect((new MySet(1,2,3)).size()).to.eql(3);
    });

    it('can return enumerable list', function() {
      expect((new MySet(1,2,3)).toList()).to.eql([1,2,3]);
    });

    it('can determine when element belongs to set', function() {
      expect(new MySet(1,2,3).has(4)).to.be.false;
    });

    it('can determine when element does not belong to set', function() {
      expect(new MySet(1,2,3).has(2)).to.be.true;
    });
  });

  describe('Equality', function() {
    beforeEach(function() {
      this.subject = new MySet(1,2,3);
    });

    it('is not order dependent', function() {
      expect(this.subject.equals(new MySet(3,2,1))).to.be.true;
    });

    it('must have the number of elements', function() {
      expect(this.subject.equals(new MySet(1,2,3,4))).to.be.false;
    });

    it('must have the same elements', function() {
      expect(this.subject.equals(new MySet(1,2,4))).to.be.false;
    });
  });

  describe('Set algebra', function() {
    beforeEach(function() {
      this.subject = new MySet(1,2,3);
      this.other = new MySet(3,4,5);
    });

    // A ∪ B
    // A1, A2,...,An + B1, B2,...Bn
    // Set of all elements of A, B, or both.
    it('can return the union of two sets', function() {
      expect(this.subject.union(this.other).equals(new MySet(1,2,3,4,5))).to.be.true;
    });

    // A ∩ B
    // Set of all elements that are in both A and B
    it('can return the intersection of two sets', function() {
      expect(this.subject.intersection(this.other).equals(new MySet(3))).to.be.true;
    });

    // A - B
    // Set of all elements of A that are not in B
    it('can return the difference of two sets', function() {
      expect(this.subject.difference(this.other).equals(new MySet(1,2))).to.be.true;
    });

    // A ⊕ B => XOR operation
    // A - B ∪ B - A
    // Set of all elements of A and B that are not in both
    it('can return the symmetric difference of two sets', function() {
      expect(this.subject.symmetricDifference(this.other).equals(new MySet(1,2,4,5))).to.be.true;
    });
  });
});
