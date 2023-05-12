const request = require("supertest");
const app = require("../api");
const postController = require("../controllers/post");

// const postController = require('../controllers/post');

// jest.setTimeout(20000);

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

  test("responds to invalid method request with 405", (done) => {
    request(api).post("/").expect(405, done);
  });

  test("responds to delete /posts/:id with status 404 if unknown id", (done) => {
    request(api).delete("/posts/99").expect(404, done);
  });

  test.only("responds to delete /posts/:id with status 204", (done) => {
    request(api)
      .delete("/posts/4")
      .expect(204, done);
  });

  test("responds to unknown book id with a 404", (done) => {
    request(api)
      .get("/posts/66")
      .expect(404)
      .expect({ error: "This book does not exist" }, done);
  });

  test("responds to posts /posts with status 201", (done) => {
    const testData = {
      title: "The Shadow of The Wind",
      content: "The Shadow of The Wind",
      book_year: 2001,
      author: "Carlos Ruiz Zafón",
      genre: "Mystery",
      on_loan: true,
    };
    request(api)
      .post("/posts")
      .send(testData)
      .set("Accept", "application/json")
      .expect(201)
      .expect({ ...testData }, done);
  });

  test("responds to patch /posts/:id with 200", (done) => {
    const post = {
      title: "The Shadow of the Wind",
      content:
        "A city slowly heals from its war wounds, and Daniel, an antiquarian book dealers son who mourns the loss of his mother, finds solace in a mysterious book entitled The Shadow of the Wind",
      book_year: 2001,
      author: "Carlors Ruiz Zafron",
      genre: "Fiction",
      on_loan: false,
    };
    const updatedPost = {
      title: "The Shadow of the Wind",
      content:
        "A city slowly heals from its war wounds, and Daniel, an antiquarian book dealers son who mourns the loss of his mother, finds solace in a mysterious book entitled The Shadow of the Wind",
      book_year: 2001,
      author: "Sean OBeirne",
      genre: "Mystery",
      on_loan: true,
    };
    const expectedResponse = {
      post_id: expect.any(Number),
      title: "The Shadow of the Wind",
      content:
        "A city slowly heals from its war wounds, and Daniel, an antiquarian book dealers son who mourns the loss of his mother, finds solace in a mysterious book entitled The Shadow of the Wind",
      book_year: 2001,
      author: "Sean OBeirne",
      genre: "Mystery",
      on_loan: true,
    };
    request(api)
      .patch(`/posts/${post.post_id}`)
      .send(updatedPost)
      .expect(200)
      .expect(expectedResponse, done);
  });

  // test("responds to delete /posts/:id with status 404 if unknown id", (done) => {

  //   const fakeId = "99";
  //   const mockDeletePost = jest.fn(() => Promise.resolve(false)); // mock the deletePost function to return false
  //   jest.mock("../controllers/post", () => ({
  //     post: () => ({
  //       deletePost: mockDeletePost,
  //     }),
  //   })); // mock the post controller module

  //   request(api)
  //     .delete(`/posts/${fakeId}`) // make the request
  //     .expect(404) // expect a 404
  //     .end((err) => {
  //       if (err) return done(err);
  //       expect(mockDeletePost).toHaveBeenCalledWith(fakeId); // expect the mock to have been called with the fake id
  //       done();
  //     });
  // });

  // test("responds to delete /posts/:id with status 204", (done) => {
  //   const fakeId = "3";
  //   const mockDeletePost = jest.fn(() => Promise.resolve(true)); // mock the deletePost function to return true
  //   jest.mock("../controllers/post", () => ({
  //     post: () => ({
  //       deletePost: mockDeletePost,
  //     }),
  //   })); // mock the post controller module

  //   request(api)
  //     .delete(`/posts/${fakeId}`) // make the request
  //     .expect(204) // expect a 204
  //     .end((err) => {
  //       if (err) return done(err);
  //       expect(mockDeletePost).toHaveBeenCalledWith(fakeId); // expect the mock to have been called with the fake id
  //       done();
  //     });
  // });
});
