'use strict';

module.exports = {
  findBySlug: async (ctx) => {
    try {
      const { slug } = ctx.params;

      const blog = await strapi.db.query('api::blog.blog').findOne({
        where: { slug },
        populate: ['thumbnail', 'sections','banner'],
      });

      if (!blog) {
        return ctx.notFound('Blog post not found');
      }

      ctx.body = blog;
    } catch (err) {
      console.error('Error in findBySlug:', err); // Log the error
      ctx.throw(500, 'Internal Server Error', { details: err.message });
    }
  },
};