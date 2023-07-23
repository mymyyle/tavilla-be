"use strict";

/**
 * footer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::footer.footer", () => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: "deep", local: "en" };

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
