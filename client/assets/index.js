function createPostElement (data) {
    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = data["title"];
    post.appendChild(header);

    const content = document.createElement("p");
    content.textContent = data["content"];
    content.id = "content";
    console.log(content.id)
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

    return post;
}


async function loadPosts () {

    const options = {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    }
    const response = await fetch("https://mvp-library-app-backend1.onrender.com/posts", options);

    if (response.status == 200) {
        const posts = await response.json();
    
        const container = document.getElementById("posts");

        posts.forEach(p => {
            const elem = createPostElement(p);
            container.appendChild(elem);
        })
    } else {
        window.location.assign("./index.html");
    }

}

loadPosts();

console.log("Loaded")
