'use strict'
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/blogs/:slug',
            handler: 'slug.findBySlug',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
}