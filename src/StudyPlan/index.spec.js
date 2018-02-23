// @flow

import StudyPlan from './'

const genWordsList = length => {
  return [...Array(length)].map((i) => ({
    wordStr: `wordStr_${i}`,
    definition: `definition_${i}`,
    partsOfSpeech: `partsOfSpeech_${i}`,
    phoneticSymbol: `phoneticSymbol_${i}`,
    synonyms: []
  }))
}

describe('StudyPlan', () => {
  describe('getWordsAmount', () => {
    it('return amount equal length of words list when learnedWords is empty', () => {
      const wordsListAmount = 21
      const wordsList = genWordsList(wordsListAmount)
      expect(StudyPlan.getWordsAmount(wordsList, [])).toEqual(wordsListAmount)
    })

    it('return amount equal length of wordsList filter learnedWords', () => {
      const wordsListAmount = 21
      const learnedWordsAmount = 3
      const wordsList = genWordsList(wordsListAmount)
      const learnedWords = genWordsList(learnedWordsAmount).map(w => w.wordStr)
      expect(StudyPlan.getWordsAmount(wordsList, learnedWords)).toEqual(
        wordsListAmount - learnedWordsAmount
      )
    })
  })

  describe('getDailyWordsAmount', () => {
    it('return undefined if daysAmount is not in daysOpts', () => {
      expect(StudyPlan.getDailyWordsAmount(StudyPlan.getOpts(21), 4)).toBe(
        undefined
      )
      expect(StudyPlan.getDailyWordsAmount(new Map([]), 5)).toBe(undefined)
    })

    it('return wordsAmount', () => {
      expect(
        StudyPlan.getDailyWordsAmount(StudyPlan.getOpts(21), 3)
      ).toEqual(10)
    })

    it('return first match of wordsAmount', () => {
      expect(
        StudyPlan.getDailyWordsAmount(StudyPlan.getOpts(21), 2)
      ).toEqual(15)
    })
  })
})
