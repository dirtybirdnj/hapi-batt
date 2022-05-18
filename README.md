# hapi-batt

`git clone git@github.com:dirtybirdnj/hapi-batt.git`


## Getting it working locally

`npm install`

`nodemon /server/index.js` (aliased below)

`npx hpal make model Chargers`

`npx hpal make route chargers`

`npx knex migrate:make add-chargers`

`npx knex migrate:latest`

`npx knex migrate:rollback`

`npm run develop`
