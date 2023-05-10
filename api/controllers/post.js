const Post = require('../models/post');

async function index (req, res) {
    try {
        const posts = await Post.getAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
};

async function create (req, res) {
    try {
        const data = req.body;
        const result = await Post.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": "Unable to create a new book"})
    }
};

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        res.json(post);
    } catch (err) {
        res.status(404).json({"error": "This book does not exist"})
    }
};

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        const result = await post.destroy();
        res.json(result).end();
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const post = await Post.getOneById(id);
        const result = await post.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

module.exports = {
    index, create, show, destroy, update
}
