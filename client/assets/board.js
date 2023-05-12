const postsPerPage = 3;
let currentPage = 1;

function createPostElement(data) {
  const post = document.createElement("div");
  post.className = "post";

  const header = document.createElement("h2");
  header.textContent = data["title"];
  header.id="header"
  post.appendChild(header);

  const content = document.createElement("p");
  content.textContent = data["content"];
  content.id = "content"
  post.appendChild(content);

  const year = document.createElement("p");
  year.innerHTML = `<strong>Book Year:</strong> ${data["year"]}`;
  year.id = "year"
  post.appendChild(year);

  const author = document.createElement("p");
  author.innerHTML = `<strong>Author:</strong> ${data["author"]}`;
  author.id = "author"
  post.appendChild(author);

  const genre = document.createElement("p");
  genre.innerHTML = `<strong>Genre:</strong> ${data["genre"]}`;
  genre.id = "genre"
  post.appendChild(genre);

  const on_loan = document.createElement("p");
  on_loan.innerHTML = `<strong>Is Book available:</strong> ${data["on_loan"]}`;
  on_loan.id = "on_loan" 
  post.appendChild(on_loan);

  return post;
}

async function loadPosts(search = "") {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch(
    "http://localhost:3000/posts?search=" + search,
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

const search = document.querySelector('.input')
search.addEventListener("keypress", () => {
  let value = e.target.value
  loadPosts(value)
})

