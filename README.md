# hapi-batt 🛬🔌⚡️🛫🔋😎

A coding test solution that fulfills the following requirements:

- [x] 1. IaC Deployed to AWS (using [Serverless.com](https://github.com/serverless/serverless) + [Hapijs](https://github.com/hapijs/hapi) + [Lalalambda](https://github.com/hapipal/lalalambda))
- [x] 2. Integration with MySQL - [Objection ORM](https://vincit.github.io/objection.js/_) + Knex
- [X] 3. [CRUD Operations](https://github.com/dirtybirdnj/hapi-batt/blob/main/lib/routes/chargers.js)
- [ ] 4. Auth required for Create, Read, Delete operations
- [x] 5. No auth for list / read
- [ ] 6. API Errors logged for troubleshooting
- [ ] 7. Alerts sent (email?) for any 500 err
- [x] 8. Swagger OpenAPI

## Getting it working locally

`git clone git@github.com:dirtybirdnj/hapi-batt.git`

`npm install`

`npm run develop`

## Deploying it via Serverless / AWS

This works locally, but the build is currently breaking for ci/cd on serverless.com dashboard
`serverless deploy --stage dev --region us-east-1 --force --org vtapi --app hapi-batt --verbose`

## Making Model / Migration changes


`npx knex migrate:latest`

`npx knex migrate:rollback`

`npm run db-wipe` (runs the two commands above in correct sequence)

TODO: SEEDING

## Extending the API beyond chargers

`npx hpal make model Aircraft`

`npx hpal make route aircraft`

`npx knex migrate:make add-aircraft`

Plugins TODO:

https://www.serverless.com/plugins/serverless-plugin-aws-alerts -> Email on 500 errors
https://www.serverless.com/plugins/serverless-plugin-log-subscription -> Pipe output to cloudwatch