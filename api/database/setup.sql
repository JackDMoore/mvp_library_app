DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;
DROP TABLE IF EXISTS books

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
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

CREATE TABLE books (
    book_id INT GENERATED ALWAYS AS IDENTITY,
    book_name VARCHAR(100) NOT NULL,
    content VARCHAR(5000) NOT NULL
    book_year INT NOT NULL
    author VARCHAR(250) NOT NULL,
    category VARCHAR(100) NOT NULL
    on_loan BOOLEAN
);

INSERT INTO books VALUES (
INSERT INTO books VALUES (1,'Harry Potter and the Sorcerer’s Stone','After murdering Harry's parents, James and Lily Potter, evil Lord Voldemort puts a killing curse on Harry, then just a baby. The curse inexplicably reverses, defeating Voldemort and searing a lightning-bolt scar in the middle of the infant's forehead. Harry is then left at the doorstep of his boring but brutish aunt and uncle, the Dursleys.

For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.

Harry discovers that not only is he a wizard, but he is a famous one. He meets two best friends, Ron Weasley and Hermione Granger, and makes his first enemy, Draco Malfoy. At Hogwarts the three friends are all placed into the Gryffindor house. Harry has a knack for the school sport, Quidditch, and is recruited onto the Gryffindor team as its star Seeker.

Perusing the restricted section in the library, Harry discovers that the Sorcerer's Stone produces the Elixir of Life, which gives its drinker the gift of immortality. After realizing that Voldemort might be after the stone, Albus Dumbledore had it moved it to Hogwarts for safekeeping.

Harry finds out that when she died, Lily Potter transferred to her son an ancient magical protection from Voldemort's lethal spells. This protection is what allowed Harry as an infant to survive Voldemort's attack. It also helps Harry keep Voldemort from possessing the Stone, which Dumbledore agrees to destroy.', 1997,'J.K Rowling', 'Fantasy',);
)