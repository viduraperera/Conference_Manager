import request from 'supertest';
import app from '../index.js';

//for getting the workshop endpoint (GET)
describe('Get workshop Endpoints', () => {
  it('should get workshop from the endpoint', async () => {
    const res = await request(app).get('/api/workshop/');
    expect(res.statusCode).toEqual(200);
  });
});

//for getting the research endpoint (GET)
describe('Get research Endpoints', () => {
  it('should get research from the endpoint', async () => {
    const res = await request(app).get('/api/research/');
    expect(res.statusCode).toEqual(200);
  });
});

//for getting the post endpoint (GET)
describe('Get post Endpoints', () => {
  it('should get post from the endpoint', async () => {
    const res = await request(app).get('/api/post/');
    expect(res.statusCode).toEqual(200);
  });
});

//for getting the getPayments endpoint (GET)
describe('Get getPayments Endpoints', () => {
  it('should get getPayments from the endpoint', async () => {
    const res = await request(app).get('/api/payment/');
    expect(res.statusCode).toEqual(200);
  });
});

//for getting the getUsers endpoint (GET)
describe('Get getUsers Endpoints', () => {
  it('should get getUsers from the endpoint', async () => {
    const res = await request(app).get('/api/user/');
    expect(res.statusCode).toEqual(200);
  });
});

//getting a single workshop 60bb2782838cff5a176c7e4e
describe('Get single workshop Endpoints', () => {
  it('should get single workshop from the endpoint Basics of js for beginners', async () => {
    const res = await request(app).get('/api/workshop/60bb2782838cff5a176c7e4e');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Get single research Endpoints', () => {
  it('should get single research from the endpoint Basics of js for beginners', async () => {
    const res = await request(app).get('/api/research/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('creating a user', () =>{
  it("create user", async () =>{
    const data ={
      name:"test case012",
      email: "qwers@gmail.com",
      password: '1233',
      contactNo: "123445461",
      role: "researcher"
    }

    const res = await request(app).post('/api/user/').send(data);

    expect(res.statusCode).toEqual(200);
  })
})
//
// describe('creating a research', () =>{
//   it("create research", async () =>{
//     const data ={
//       title:"test case01 research",
//       description: "this is a test run research",
//       path:"test.pdf"
//     }
//     const res = await request(app).post('/api/research/');
//     expect(res.statusCode).toEqual(200);
//   })
// })