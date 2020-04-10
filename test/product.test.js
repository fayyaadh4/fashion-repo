//test created using mocha and chai
//checks product GET request
let expect = require("chai").expect;
let request = require("request");

describe("Status and Content of GET request", function() {
  describe("checking status of fetch request. Response code should equal 200", function() {
    it("status", function(done) {
      request("http://localhost:8000/products", function(
        error,
        response,
        body
      ) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("checking if body content is successfully fetched", function(done) {
      request("http://localhost:8000/products", function(
        error,
        response,
        body
      ) {
        expect(body).to.equal(response.body);
        done();
      });
    });
  });
});
