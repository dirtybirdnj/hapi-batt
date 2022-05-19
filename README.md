# hapi-batt

A coding test solution that fulfills the following requirements:

- [x] 1. IaC Deployed to AWS (using Serverless.com)
- [x] 2. Integration with MySQL (Objection ORM supports more)
- [ ] 3. CRUD Operations
- [ ] 4. Auth required for Create, Read, Delete operations
- [x] 5. No auth for list / read
- [ ] 6. API Errors logged for troubleshooting
- [ ] 7. Alerts sent (email?) for any 500 err
- [x] 8. Swagger OpenAPI generated

## Getting it working locally

`git clone git@github.com:dirtybirdnj/hapi-batt.git`

`npm install`

`npm run develop`

## Making Model / Migration changes


`npx knex migrate:latest`

`npx knex migrate:rollback`

`npm run db-wipe` (runs the two commands above in correct sequence)

TODO: SEEDING

## Extending the API beyond chargers

`npx hpal make model Aircraft`

`npx hpal make route aircraft`

`npx knex migrate:make add-aircraft`
