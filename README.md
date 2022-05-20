# hapi-batt 🛬🔌⚡️🛫🔋😎

### Overview:

This repo is the solution to a coding test that fulfills the following requirements:

- [x] 1. IaC Deployed to AWS (using [Serverless.com](https://github.com/serverless/serverless) + [Hapijs](https://github.com/hapijs/hapi) + [Lalalambda](https://github.com/hapipal/lalalambda))
- [x] 2. Integration with MySQL - [Objection ORM](https://vincit.github.io/objection.js/_) + [Knex](http://knexjs.org/)
- [X] 3. [CRUD Operations](https://github.com/dirtybirdnj/hapi-batt/blob/main/lib/routes/chargers.js)
- [x] 4. [Auth required for Create, Update, Delete operations](https://github.com/dirtybirdnj/hapi-batt/blob/main/server/plugins/auth.js)
- [x] 5. [No auth for list / read](https://github.com/dirtybirdnj/hapi-batt/blob/main/lib/routes/chargers.js#L9-L26=)
- [ ] 6. API Errors logged for troubleshooting
- [ ] 7. Alerts sent (email?) for any 500 err
- [x] 8. Swagger OpenAPI

### Getting it working locally

`git clone git@github.com:dirtybirdnj/hapi-batt.git`

`npm install`

`npm run dev`

`touch server/.env` <- .env goes here not in project root

ENV Variables Required:
```
PORT=3000
NODE_ENV=development <- this uses knex / mysql and creds below
#NODE_ENV=local <- this uses a local SQLite .db file
AWS_RDS_ENDPOINT=*.us-east-1.rds.amazonaws.com
AWS_RDS_DATABASE=battery-status
AWS_RDS_USERNAME=
AWS_RDS_PASSWORD=
API_KEY=ACA8675309DAD
```

### Deploying it via Serverless / AWS

This works locally, but the build is currently breaking for ci/cd on serverless.com dashboard
`serverless deploy --stage dev --region us-east-1 --force --org vtapi --app hapi-batt --verbose`

### Making Model / Migration changes


`npx knex migrate:latest`

`npx knex migrate:rollback`

`npm run db-wipe` (runs the two commands above in correct sequence)

TODO: SEEDING

## Extending the API beyond chargers

`npx hpal make model Aircraft`

`npx hpal make route aircraft`

`npx knex migrate:make add-aircraft`

## Making Authenticated Requests:

The format for simple header based API Key authentication can be seen in the **Authorization** header below

```
axios({
	"method": "POST",
	"url": "http://localhost:3000/create",
	"headers": {
		"Authorization": "Bearer ACA8675309DAD",
		"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
	},
	"data": "slug=BTV-0035&name=Office+pad+charger+71&description=Front+door+charger+used+for+airplanes+and+small+vehicles&location=22.55%2C+-73.45&network_protocol=OCPP+2.0"
})
```

Plugins TODO:

https://www.serverless.com/plugins/serverless-plugin-aws-alerts -> Email on 500 errors
https://www.serverless.com/plugins/serverless-plugin-log-subscription -> Pipe output to cloudwatch