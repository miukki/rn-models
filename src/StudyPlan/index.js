// @flow

type Word = {
  wordStr: string,
  definition: string,
  partsOfSpeech: string,
  phoneticSymbol: string,
  synonyms: Array<string>
};

type WordsList = Array<Word>;

type DailyWordsAmount = number;

type DaysAmount = number;

type Opts = Map<DailyWordsAmount, DaysAmount>;

class StudyPlan {
  static getWordsAmount (wordsList: WordsList, learnedWords: Array<string>): number {
    return wordsList.map(
      w => w.wordStr
    ).filter(
      w => learnedWords.indexOf(w) === -1
    ).length
  }

  static getOpts (wordsAmount: number): Opts {
    let opts = new Map()
    let i = 1
    while (wordsAmount >= i * 5) {
      const dailyWords = i * 5
      opts.set(
        i * 5,
        Number.parseInt((wordsAmount / dailyWords).toString()) +
          (wordsAmount % dailyWords > 0 ? 1 : 0)
      )
      i++
    }

    return opts
  }

  static getDaysAmount (opts: Opts, dailyWordsAmount: DailyWordsAmount): ?DaysAmount {
    return opts.get(dailyWordsAmount)
  }

  static getDailyWordsAmount (opts: Opts, daysAmount: DaysAmount): ?DailyWordsAmount {
    for (var [key, value] of opts) {
      if (value === daysAmount) {
        return key
      }
    }

    return undefined
  }
}

export default StudyPlan
