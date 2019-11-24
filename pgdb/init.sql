-- creates a schema for our DB
CREATE SCHEMA notes;

CREATE TABLE notes.values (
    number INTEGER NOT NULL,
    CONSTRAINT PK_values PRIMARY KEY (number)
);