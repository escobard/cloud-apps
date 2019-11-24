-- creates a schema for our DB
CREATE SCHEMA notes;

CREATE TABLE notes.users (
    id serial,
    email VARCHAR(100) NOT NULL,
    number INTEGER NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE notes.notes (
    id serial,
    user int NOT NULL,
    subject VARCHAR(250) NOT NULL,
    note VARCHAR(1000) NOT NULL,
    added_date timestamp NOT NULL,
    FOREIGN KEY (user) REFERENCES notes.users(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);
