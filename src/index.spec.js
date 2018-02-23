import vocabModels from './index.js'

describe('vocabModels', () => {
  it('contains Practice object', () => {
    expect(vocabModels.Practice.name).toBe('Practice')
  })

  it('contains StudyPlan object', () => {
    expect(vocabModels.StudyPlan.name).toBe('StudyPlan')
  })
})
