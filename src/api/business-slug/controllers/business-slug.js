"use strict";

/**
 * A set of functions called "actions" for `business-slug`
 */

module.exports = {
  getBusinessBySlug: async () => {
    try {
      const ctx = await strapi.requestContext.get();
      const slug = ctx.params["slug"];

      if (!slug) return ctx.badRequest("Slug is required", { moreDetails: "" });

      const data = await strapi
        .service("api::business-slug.business-slug")
        .getBySlug({ slug });

      ctx.body = { response: data };
    } catch (error) {
      ctx.badRequest("Business controller error", { moreDetails: error });
    }
  },
};
