'use strict';
const { default: createStrapi } = require('strapi');
const { sanitizeEntity, parseMultipartData } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {


    // Create event with linked user
    async create(ctx) {
        let entity;
        if(ctx.is('multipart')) {
            const {data, files} = parseMultipartData(ctx);
            data.user = ctx.state.user.id;
            entity = await strapi.services.articles.create(data, {
                files
            });
        } else {
            ctx.request.body.user = ctx.state.user.id;
            entity = await strapi.services.articles.create(ctx.request.body);
        }

        return sanitizeEntity(entity, {model: strapi.models.events})
    },

    // Update user event
    async update(ctx) {
        const { id } = ctx.params;
        let entity;
        const [articles] = await strapi.services.articles.find({
            id: ctx.params.id,
            "user.id": ctx.state.user.id,
        });

        if(!articles) {
            return ctx.unauthorized(`You can't update this entry`);
        }

        if(ctx.is("multipart")) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.articles.update({ id }, data, {
                files,
            });
        } else {
            entity = await strapi.services.articles.update({ id }, ctx.request.body);
        }

        return sanitizeEntity(entity, { model: strapi.models.articles });
    },

    // Delete a user event
    async delete(ctx) {
        const { id } = ctx.params;
        const [articles] = await strapi.services.articles.find({
            id: ctx.params.id,
            "user.id": ctx.state.user.id,
        });

        if(!articles) {
            return ctx.unauthorized(`You can't update this entry`);
        }

        const entity = await strapi.services.articles.delete({ id });

        return sanitizeEntity(entity, { model: strapi.models.articles });
    },

    // Get logged in users
    async me(ctx) {
        const user = ctx.state.user;

        if(!user) {
            return ctx.badRequest(null, [
                {messages: [{ id: "No authorization header was found" }] },
            ]);
        }

        const data = await strapi.services.articles.find({ user: user.id });

        if(!data) {
            return ctx.notFound()
        }

        return sanitizeEntity(data, { model: strapi.models.articles });
    }

};
