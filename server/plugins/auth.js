'use strict';


module.exports = {
    name: 'auth',
    async register(server) {

        await server.register([
            {
                plugin: require('hapi-auth-bearer-token'),
                options: {
                }
            }
        ]);

        // const validate = (request, username, password, h) => {

        //     if (username !== process.env.API_KEY && password !== process.env.API_KEY) {
        //     //if (username === 'ACA8675309DAD') {

        //         return { credentials: null, isValid: false };

        //     }

        //     // could further validate password if using it as a session token or something

        //     return { credentials: username, isValid: true };
        //     //return true;


        // };

        //server.auth.strategy('simple', 'basic', { validate });
        server.auth.strategy('simple', 'bearer-access-token', {
            allowQueryToken: true,              // optional, false by default
            validate: (request, token, h) => {

                // here is where you validate your token
                // comparing with token from your database for example
                const isValid = token === process.env.API_KEY;

                const credentials = { token };
                const artifacts = { test: 'info' };

                return { isValid, credentials, artifacts };
            }
        });
        server.auth.default('simple'); //applies auth to all routes
    }
};
