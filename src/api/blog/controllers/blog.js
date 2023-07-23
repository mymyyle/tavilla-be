"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: "deep", local: "en" };

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
