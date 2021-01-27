CREATE SCHEMA notes;

CREATE TABLE notes.users (
    id serial,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE notes.notes (
    id serial,
    user_id INTEGER NOT NULL,
    subject VARCHAR(250) NOT NULL,
    note VARCHAR(1000) NOT NULL,
    date VARCHAR(25) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES notes.users(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);
