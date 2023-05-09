const db = require('../database/connect');

class Post {

    constructor({ post_id, title, content, book_year, author, genre, on_loan }) {
        this.id = post_id;
        this.title = title;
        this.content = content;
        this.book_year = book_year
        this.author = author;
        this.genre = genre;
        this.on_loan = on_loan;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM post");
        return response.rows.map(p => new Post(p));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM post WHERE post_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate post.")
        }
        return new Post(response.rows[0]);
    }

    static async create(data) {
        const { title, content, book_year, author, genre, on_loan } = data;
        let response = await db.query("INSERT INTO post (title, content, book_year, author, genre, on_loan) VALUES ($1, $2, $3, $4, $5, $6) RETURNING post_id;",
            [title, content, book_year, author, genre, on_loan]);
        const newId = response.rows[0].post_id;
        const newPost = await Post.getOneById(newId);
        return newPost;
    }

    async update(data) {
        const { title, content, book_year, author, genre, on_loan } = data;
        let response = await db.query("UPDATE post SET (title, content, book_year, author, genre, on_loan) = ($1, $2, $3, $4, $5, $6) WHERE post_id = $7 RETURNING *;",
            [title, content, book_year, author, genre, on_loan, this.id]);
            if (response.rows.length != 1) {
                throw new Error("Not able to update Pokemon")
              }
              return new Pokemon(response.rows[0])
            }
    

    async destroy() {
        let response = await db.query("DELETE FROM post WHERE post_id = $1 RETURNING *;", [this.id]);
        return new Post(response.rows[0]);
    }

}

module.exports = Post;