'use strict';

const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/list',
        options: {
            tags: ['api'],
            handler: async (request, h) => {

                const { Chargers } = request.models();
                const chargerList = await Chargers.query();
                return chargerList;

            }
        }
    },
    {
        method: 'post',
        path: '/create',
        options: {
            validate: {
                // Check that the POST'd data complies with our model's schema
                payload: Joi.object({
                    slug: Joi.string().required(),
                    name: Joi.string().required()
                    // description: Joi.string().required(),
                    // location: Joi.string().required(),
                    // status: Joi.string().required(),
                    // network_protocol: Joi.string().required(),
                    // public: Joi.boolean().required()
                })
            },
            // Our db query is asynchronous, so we keep async around this time
            handler: async (request) => {

                // We nab our Chargers model, from which we execute queries on our Chargers table
                const { Chargers } = request.models();

                // We store our payload (the prospective new charger object)
                const charger = request.payload;

                // We try to add the POST'd riddle using Objection's insertAndFetch method (http://vincit.github.io/objection.js/#insertandfetch)
                // If that throws for any reason, hapi will reply with a 500 error for us, which we could customize better in the future.

                return await Chargers.query().insertAndFetch(charger);
            }
        }
    },
    {
        method: 'post',
        path: '/update',
        options: {
            validate: {
                // Check that the POST'd data complies with our model's schema
                payload: Joi.object({
                    slug: Joi.string().required(),
                    name: Joi.string().required()
                    // description: Joi.string().required(),
                    // location: Joi.string().required(),
                    // status: Joi.string().required(),
                    // network_protocol: Joi.string().required(),
                    // public: Joi.boolean().required()
                })
            },
            // Our db query is asynchronous, so we keep async around this time
            handler: async (request) => {

                // We nab our Chargers model, from which we execute queries on our Chargers table
                const { Chargers } = request.models();

                // We store our payload (the prospective new charger object)
                const charger = request.payload;

                //TODO: Fetch, return error if it doesnt exist

                // We try to add the POST'd riddle using Objection's insertAndFetch method (http://vincit.github.io/objection.js/#insertandfetch)
                // If that throws for any reason, hapi will reply with a 500 error for us, which we could customize better in the future.

                return await Chargers.query().insertAndFetch(charger);
            }
        }
    },
    {
        method: 'post',
        path: '/delete',
        options: {
            validate: {
                // Check that the POST'd data complies with our model's schema
                payload: Joi.object({
                    slug: Joi.string().required()
                })
            },
            // Our db query is asynchronous, so we keep async around this time
            handler: async (request) => {

                // We nab our Chargers model, from which we execute queries on our Chargers table
                const { Chargers } = request.models();

                // We store our payload (the prospective new charger object)
                const charger = request.payload;

                //TODO: Fetch, return error if it doesnt exist

                // We try to add the POST'd riddle using Objection's insertAndFetch method (http://vincit.github.io/objection.js/#insertandfetch)
                // If that throws for any reason, hapi will reply with a 500 error for us, which we could customize better in the future.

                return await Chargers.query().insertAndFetch(charger);
            }
        }
    }
];