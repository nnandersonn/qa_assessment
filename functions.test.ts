const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    test(`be an array`, async ()=> {
        expect(shuffleArray([1, 5, 5, 6])).toHaveLength(4)
    })

    test('to be shuffled',async () => {
        expect(shuffleArray([1, 2, 4, 5])).not.toContain([1, 2, 4, 5])
    })
})