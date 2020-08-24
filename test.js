var expect = require('chai').expect;
const {sameTime} = require('./sameTime.js');

describe("Expects, alive at the same time", () => {
  it("SameTime([]) to take in a empty array and return an emtpy array ", () => {
    expect(sameTime([])).with.lengthOf(0);
  });

  it("SameTime([[]]), should return empty array", () => {
    expect(sameTime([[]])).with.lengthOf(0);
  })

  it("SameTime([1900, 1890]), should return []", () => {
    expect(sameTime([1900, 1890])).with.lengthOf(0);
  })

  it("SameTime([1900, 1911]), should return [1900, 1901, ... , 1911] lenght should eqaul 11", () => {
    expect(sameTime([1900, 1911])).with.lengthOf(12);
  })

  it("SameTime([1900, 1911]), last element in array expect to equal 1911 ", () => {
    expect(sameTime([1900, 1911]).pop()).to.equal(1911);
  })

  it("SameTime([[1910, 1950], [1900, 1951], [1945, 2000]]), expect the fist element to equal 1945", () => {
    expect(sameTime([[1910, 1950], [1900, 1951], [1945, 2000]]).shift()).to.equal(1945);
  })

  it("SameTime([[1910, 1960], [1912, 1950], [1930, 1970], [1922, 1980], [1900, 1961]]), expect length to equal 30", () => {
    expect(sameTime([[1910, 1960], [1912, 1950], [1930, 1970], [1922, 1980], [1900, 1961]])).with.lengthOf(21);
  })

  it("SameTime([[1910, 1960], [1912, 1950], [1930, 1970], [1922, 1980], [1900, 1961]]), expect last element to eqal 1950", () => {
    expect(sameTime([[1910, 1960], [1912, 1950], [1930, 1970], [1922, 1980], [1900, 1961]]).pop()).to.equal(1950);
  })
});