'use strict'

module.exports={
    routes:[{
        method:'GET',
        path:'/services/:slug',
        handler:'slug.findBySlug',
        config:{
            auth:false,
            policies:[],
            middlewares:[],
        }
    }]
}