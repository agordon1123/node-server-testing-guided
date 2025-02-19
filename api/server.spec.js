const request = require('supertest');
const server = require('../api/server');

describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
            // make a request to the server
             return request(server).get('/').then(res => {
                 expect(res.status).toBe(200)
             });
            // assert that we get an http status code 200
        });
        it("should return { api: 'up' }", async () => {
            const res = await request(server).get('/');
            expect(res.body.api).toBe('up');
        });

        // this example uses done() to declare as async
        it('returns JSON', done => {
            request(server)
            .get('/')
            .then(res => {
                // assert that we get an http status code 200
                expect(res.type).toMatch(/json/i);
                done();
            });
        });
    });
});

// one GOTCHA is that we must return the request with asyncronous calls or it will reach the bottom without faiing before the promise is returned
    // or we can use the async keyword or the done() fn
