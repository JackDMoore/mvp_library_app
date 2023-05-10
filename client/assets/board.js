const postsPerPage = 3;
let currentPage = 1;

function createPostElement(data) {
  const post = document.createElement("div");
  post.className = "post";

  const header = document.createElement("h2");
  header.textContent = data["title"];
  post.appendChild(header);

  const content = document.createElement("p");
  content.textContent = data["content"];
  post.appendChild(content);

  const year = document.createElement("p");
  year.innerHTML = `<strong>Book Year:</strong> ${data["year"]}`;
  post.appendChild(year);

  const author = document.createElement("p");
  author.innerHTML = `<strong>Author:</strong> ${data["author"]}`;
  post.appendChild(author);

  const genre = document.createElement("p");
  genre.innerHTML = `<strong>Genre:</strong> ${data["genre"]}`;
  post.appendChild(genre);

  const on_loan = document.createElement("p");
  on_loan.innerHTML = `<strong>Is Book available:</strong> ${data["on_loan"]}`;
  post.appendChild(on_loan);

  return post;
}

async function loadPosts() {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch(
    "https://mvp-library-app-backend1.onrender.com/posts",
    options
  );

  if (response.status == 200) {
    const posts = await response.json();
    const container = document.getElementById("posts");
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const currentPosts = posts.slice(start, end);
    currentPosts.forEach((p) => {
      const elem = createPostElement(p);
      container.appendChild(elem);
    });
    if (end >= posts.length) {
      document.getElementById("load-more-btn").style.display = "none";
    }
  } else {
    window.location.assign("./index.html");
  }
}

loadPosts();

document.getElementById("load-more-btn").addEventListener("click", () => {
  currentPage++;
  loadPosts();
});




