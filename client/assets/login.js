document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.get("username"),
            password: form.get("password")
        })
    }

    const response = await fetch("https://mvp-library-app-backend1.onrender.com/users/login", options);
    const data = await response.json();

    console.log(data);

    if (response.status == 200) {
        localStorage.setItem("token", data.token.token);
        window.location.assign("board.html");
    } else {
        alert(data.error);
    }
})














