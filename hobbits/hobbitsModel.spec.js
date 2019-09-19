const Hobbits = require('./hobbitsModel');
const db = require('../data/dbConfig');

describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('insert()', () => {
        it('should insert hobbits into the db', async () => {
            // insert a record
            await Hobbits.insert({ name: 'Gaffer' });
            const hobbits = await db('hobbits');
            console.log(hobbits);
            // assert the record was inserted
            expect(hobbits).toHaveLength(1);
        });
        it('should insert hobbits into the db', async () => {
            const [id] = await Hobbits.insert({ name: 'Gaffer' })
            // insert a record
            let hobbit = await db('hobbits')
                .where({ id })
                .first();
            // assert the record was inserted
            expect (hobbit.name).toBe('Gaffer');
        })
    });
});
