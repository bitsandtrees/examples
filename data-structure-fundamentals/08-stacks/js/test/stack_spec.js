const expect = require('chai').expect;
const Stack = require('../index');

/*
create(): creates a new, initially empty stack
empty(S): returns whether the stack is empty
size(S): returns the size of the stack

push(S, x): adds element x to the top of stack S
pop(S): removes and returns the top-most (most recently added) element of stack S
peek(S): returns the top-most (most recently added) element of stack S, but leaves it in S
 */

describe('Stack', function() {
  let subject;

  beforeEach(function() {
    subject = new Stack();
  });

  it('is empty by default', function() {
    expect(subject.size()).to.equal(0);
    expect(subject.empty()).to.be.true;
  });

  it('returns undefined when peeking at an empty stack', function() {
    expect(subject.peek()).to.be.undefined;
  });

  it('returns undefined when popping an empty stack', function() {
    expect(subject.pop()).to.be.undefined;
  });

  describe('adding items', function() {
    beforeEach(function() {
      subject.push('Hi');
    });

    it('can count the items in a stack', function() {
      expect(subject.size()).to.equal(1);
      expect(subject.empty()).to.be.false;
    });

    it('can peek at the top value of a stack', function() {
      subject.push('Bye');

      expect(subject.peek()).to.equal('Bye');
      expect(subject.size()).to.equal(2);
    });

    it('can pop the top value of a stack', function() {
      subject.push('Bye');
      const val = subject.pop();

      expect(val).to.equal('Bye');
      expect(subject.size()).to.equal(1);
    });
  });
});
