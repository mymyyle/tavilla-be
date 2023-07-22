'use strict';

/**
 * reload-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reload-website.reload-website');
