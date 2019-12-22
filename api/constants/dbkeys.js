// TODO - should be no need to make any changes with API / ngnix for this iteration - will need to make this logic dynamic for external DB
const keys = {
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT
}