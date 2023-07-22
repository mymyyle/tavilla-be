'use strict';

/**
 * reload-website router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reload-website.reload-website');
