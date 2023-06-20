
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace '../app' with the actual path to your Express app file
const fs = require('fs-extra');
chai.use(chaiHttp); // Add this line to enable chai-http

const { expect } = require("chai");

describe('User Registration', function() {
  this.timeout(15000);

  it('should add a new user', function(done) {
    chai
      .request(app)
      .post('/register')
      .send({
        username: 'testuse',
        email: 'test@example.com',
        password: 'password',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
 
describe('Login', () => {
    it('should redirect to home page after successful login', function (done) {
      this.timeout(30000); // Increase the timeout to 5 seconds
  
      chai
        .request(app)
        .post('/login')
        .send({
          email: 'reutavitan22501@gmail.com',
          password: '123456',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
});
