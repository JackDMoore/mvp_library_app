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
let posts = undefined

async function loadPosts() { 
    console.log("hit")
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
    posts = await response.json();
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

//grabbing info from search

function searchBook() {
    let input = document.getElementById("search").value
    input=input.toLowerCase
} 

//search function below
async function searchBar() {
    console.log(posts)
    // const response = await fetch(
    //     "https://mvp-library-app-backend1.onrender.com/posts",
    //     options
    //   ); 
    //   if (response.status == 200) {
    //     let input = document.getElementById("search").value
    //     input=input.toLowerCase
    //     let searchResult = response.filter(input) 
    //   }
        
    //   const searchItem = response.filter(searchBook) 
}

searchBar()

