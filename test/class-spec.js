const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let word;

    beforeEach(() => {
      newWord = new Word("hello");
    });

    it('should have a "word" property', function () {
      expect(newWord).to.have.property("word")
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(newWord.word).to.equal('hello')
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const word1 = new Word('yoohoo')
      const word2 = new Word('west')
      const word3 = new Word('world')

      expect(newWord.removeVowels()).to.equal('hll')
      expect(word1.removeVowels()).to.equal('yh')
      expect(word2.removeVowels()).to.equal('wst')
      expect(word3.removeVowels()).to.equal('wrld')
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const word1 = new Word('yoohoo')
      const word2 = new Word('west')
      const word3 = new Word('world')

      expect(newWord.removeConsonants()).to.equal('eo')
      expect(word1.removeConsonants()).to.equal('oooo')
      expect(word2.removeConsonants()).to.equal('e')
      expect(word3.removeConsonants()).to.equal('o')
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const word1 = new Word('yoohoo')
      const word2 = new Word('west')

      expect(newWord.pigLatin()).to.equal('ellohay')
      expect(word1.pigLatin()).to.equal('oohooyay')
      expect(word2.pigLatin()).to.equal('estway')
    });
  });
});