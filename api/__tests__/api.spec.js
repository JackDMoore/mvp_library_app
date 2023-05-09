const request = require("supertest");
const app = require("../api");

describe("api server", () => {
  let api;
  //before all is a jest hook, that runs before(or after) all the tests, but will only run once
  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log("Test server running on port 5000");
    });
  });

  afterAll((done) => {
    console.log("Stopping the test server");
    api.close(done);
  });

  test("it responds to get / with status 200", (done) => {
    request(api).get("/").expect(200, done);
  });

  // Not sure we need the test below
  test("responds to invalid method request with 405", (done) => {
    request(api)
      .post("/")
      .expect(405, done);
  });

  // test('responds to delete /posts/:id with status 204', (done) => {
  //   request(api)
  //     .delete('/posts/1')
  //     .expect(204, done)
  // })
});
