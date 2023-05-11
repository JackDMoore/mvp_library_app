DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL CHECK (LENGTH(content) >= 70),
    book_year INT NOT NULL,
    author VARCHAR(250) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    on_loan BOOLEAN,
    PRIMARY KEY (post_id)
);

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES user_account("user_id")
);

INSERT INTO post (title, content, book_year, author, genre, on_loan) VALUES 
('To Kill a Mockingbird', 'To Kill a Mockingbird takes place in the fictional town of Maycomb, Alabama, during the Great Depression.', 1960, 'Harper Lee', 'Gothic', TRUE ),
('1984', 'The book is set in 1984 in Oceania, one of three perpetually warring totalitarian states.Oceania is governed by the all-controlling Party, which has brainwashed the population into unthinking obedience to its leader, Big Brother.' , 1948, 'George Orwell', 'Science Fiction', FALSE),
('Pride and Prejudice','The novel opens with one of the most famous lines in English literature', 1813, 'Jane Austen', 'Romance', TRUE ),
('The Great Gatsby', 'The Great Gatsby follows Nick Carraway, a young man from the midwest who moves to New York. He meets Jay Gatsby, a mysterious millionaire, and spends time with his cousin, Daisy, and her husband, Tom', 1925, 'F. Scott Fitzgerald', 'Tragedy', TRUE),
('Macbeth','Thee witches tell the Scottish general Macbeth that he will be King of Scotland. Encouraged by his wife, Macbeth kills the king, becomes the new king, and kills more people out of paranoia. Civil war erupts to overthrow Macbeth, resulting in more death.', 1623, 'William Shakespear', 'Tragedy', FALSE),
('Jane Eyre', 'The novel follows the story of Jane, a seemingly plain and simple girl as she battles through lifes struggles.', 1847, 'Charlotte Bronte', 'Romance', FALSE),
('The Lion, the Witch and the Wardrobe', 'When the Pevensie children, Peter, Susan, Edmund, and Lucy are sent out of London during World War II, they have no idea of the magical journey they are beginning.' , 1950, 'C.S Lewis', 'Fantasy' ,FALSE),
('Lord of the Flies', 'Lord of the Flies tells the story of a group of young who find themselves alone on a deserted island.', 1954, 'William Golding', 'Dystopian', TRUE );
 
