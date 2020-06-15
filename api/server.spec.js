const request = require('supertest');
const server = require('./server');


describe('server.js', function(){
    describe('GET /', function(){
        it('should return 200 OK', function(){
            return request(server)
            .get('/')
            .expect(200);

        })
        it('should return JSON', () => {
            return request(server)
            .get("/")
            .then(response => {
                expect(response.type).toMatch(/json/i);
            });
        })
        it('should respond with {api: "up"}', () => {
            return request(server)
            .get("/")
            .then(response => {
                expect(response.body.api).toBe("up")
            })
        });
    });
});

//describe('server.js', function(){})


//another way to write it is 
//it('should return 200 OK', async function(){
// const response = await request(server).get("/");
// expect(response.status).toBe(200);
//});