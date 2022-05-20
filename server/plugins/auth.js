'use strict';


module.exports = {
    name: 'auth',
    async register(server) {

        await server.register([
            {
                plugin: require('hapi-auth-basic-key'),
                options: {
                }
            }
        ]);

        const validate = (request, username, password, h) => {

            if (username !== process.env.API_KEY) {
            //if (username === 'ACA8675309DAD') {

                return { credentials: null, isValid: false };

            }

            // could further validate password if using it as a session token or something

            return h.authenticated({ credentials: username, isValid: true });
            //return true;


        };

        server.auth.strategy('simple', 'basic', { validate });
        server.auth.default('simple'); //applies auth to all routes
    }
};
