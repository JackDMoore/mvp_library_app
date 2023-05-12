const postsPerPage = 3;
let currentPage = 1;

function createPostElement(book) {
  const post = document.createElement("div");
  post.className = "post";
  post.id = `post-${book.id}`;

  const header = document.createElement("h2");
  header.textContent = book.title;
  header.id = "header";
  post.appendChild(header);

  const content = document.createElement("p");
  content.textContent = book.content;
  content.id = "content";
  console.log(content.id);
  post.appendChild(content);

  const author = document.createElement("p");
  author.innerHTML = `<strong>Author:</strong> ${book.author}`;
  author.id = "author";
  post.appendChild(author);

  const year = document.createElement("p");
  year.innerHTML = `<strong>Year:</strong> ${book.year}`;
  year.id = "year";
  post.appendChild(year);

  const genre = document.createElement("p");
  genre.innerHTML = `<strong>Genre:</strong> ${book.genre}`;
  genre.id = "genre";
  post.appendChild(genre);

  const onLoan = document.createElement("p");
  onLoan.innerHTML = `<strong>Available:</strong> ${book.onLoan ? "Yes" : "No"}`;
  onLoan.id = "on_loan"; 
  post.appendChild(onLoan);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    const confirmation = confirm("Are you sure you want to delete this book?");
    if (confirmation) {
      deletePost(book.id).then(() => location.reload());
    }
  });  
  post.appendChild(deleteButton);

  return post;
}


async function loadPosts() {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch(
    "http://localhost:3000/posts",
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

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {
    title: formData.get("title"),
    author: formData.get("author"),
    book_year: formData.get("relase-date"),
    genre: formData.get("category"),
    content: formData.get("about"),
    on_loan: formData.get("on_loan") === "true",
  };

  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then(newPost => {
      const postElement = createPostElement(newPost);
      const container = document.getElementById("posts");
      container.insertBefore(postElement, container.firstChild);
    })
    .catch(error => console.log(error));
}

document.getElementById("post-form").addEventListener("submit", handleFormSubmit);

async function deletePost(id) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch(
    `http://localhost:3000/posts/${id}`,
    options
  );
  if (response.status !== 204) {
    console.error("Failed to delete post");
  } else {
    // Reload the page to reflect the changes
    location.reload();
  }
}



document.getElementById("load-more-btn").addEventListener("click", () => {
  currentPage++;
  loadPosts();
});
