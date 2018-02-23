// @flow
import _ from 'lodash'

type Word = {
  wordStr: string,
  definition: string,
  partsOfSpeech: string,
  phoneticSymbol: string,
  synonyms: Array<string>
};

type WordsList = Array<Word>;

class Review {
  static getCards (wordsList: WordsList = [], wordsAmount: number = 30): WordsList {
    return _.shuffle(wordsList).slice(0, Math.min(wordsAmount, 30))
  }
}

export default Review
