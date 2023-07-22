'use strict';

/**
 * reload-website controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::reload-website.reload-website');
