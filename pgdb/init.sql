-- creates a schema for our DB
CREATE SCHEMA notes;

CREATE TABLE notes.users (
    id serial,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE notes.notes (
    id serial,
    user INTEGER NOT NULL,
    subject VARCHAR(250) NOT NULL,
    note VARCHAR(1000) NOT NULL,
    added_date timestamp,
    FOREIGN KEY (user) REFERENCES notes.users(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);
