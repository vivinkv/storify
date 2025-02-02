'use strict';

/**
 * A set of functions called "actions" for `slug`
 */

module.exports = {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
  findBySlug:async(ctx,next)=>{
    try {
      const {slug}=ctx.params;
      const findService=await strapi.db.query('api:service.service').findOne({
        where:{
          slug
        },
        populate:['banner','thumbnail']
      })

      if(!findService){
        return ctx.notFound('Service not found')
      }

      ctx.body=findService

    } catch (error) {
      
    }
  }
};
