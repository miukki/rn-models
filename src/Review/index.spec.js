// @flow

import Review from './'

const genWordsList = length => {
  return [...Array(length)].map((i) => ({
    wordStr: `wordStr_${i}`,
    definition: `definition_${i}`,
    partsOfSpeech: `partsOfSpeech_${i}`,
    phoneticSymbol: `phoneticSymbol_${i}`,
    synonyms: []
  }))
}

describe('Review', () => {
  describe('getCards', () => {
    it('if wordsList.length >= 30 and if wordsAmount = undefined, return getCards().length === 30', () => {
      const wordsAmount = undefined
      const wordsList = genWordsList(50)
      expect(Review.getCards(wordsList, wordsAmount).length).toEqual(30)
    })
    it('if wordsList.length <= 30 and if wordsAmount = undefined, return getCards().length === wordsList.length', () => {
      const wordsAmount = undefined
      const wordsList = genWordsList(28)
      expect(Review.getCards(wordsList, wordsAmount).length).toEqual(28)
    })
    it('if wordsAmount is exist and if wordsList.length <= wordsAmount , return getCards().length === wordsList.length', () => {
      const wordsAmount = 25
      const wordsList = genWordsList(20)
      expect(Review.getCards(wordsList, wordsAmount).length).toEqual(20)
    })
    it('if wordsAmount is exist and if wordsList.length >= wordsAmount , return getCards().length === wordsList.length', () => {
      const wordsAmount = 25
      const wordsList = genWordsList(30)
      expect(Review.getCards(wordsList, wordsAmount).length).toEqual(25)
    })
    it('if wordsList is undefined, return getCards().length === 0', () => {
      const wordsAmount = 25
      const wordsList = undefined
      expect(Review.getCards(wordsList, wordsAmount).length).toEqual(0)
    })
  })
})
