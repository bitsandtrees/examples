const expect = require('chai').expect;
const tuple = require('../index');

describe('Tuple', function() {
  beforeEach(function() {
    this.subject = tuple(1,2,'a');
  });

  describe('Equality', function() {
    it('must have same length and ordered elements', function() {
    });

    it('must have the same length', function() {
      expect(this.subject).not.eql(tuple(1,2,'a','b'));
    });

    it('must have the same elements', function() {
      expect(this.subject).not.eql(tuple(1,2,3));
    });

    it('must have the same order', function() {
      expect(this.subject).not.eql(tuple(1,'a',2));
    });
  });

  it('can have multiple elements', function() {
    this.subject = tuple(1,2,2,2);

    expect(this.subject.length).to.eql(4);
  });

  it('must be immutable', function() {
    this.subject[3] = 5;

    expect(this.subject.length).to.eql(3);
    expect(this.subject[3]).to.be.undefined;
  });

  it('can be destructured', function() {
    const fn = ([first, second, third]) => {
      expect(this.subject[0]).to.eql(first);
      expect(this.subject[1]).to.eql(second);
      expect(this.subject[2]).to.eql(third);
    };

    fn(this.subject);
  });
})
