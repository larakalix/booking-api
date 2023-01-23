"use strict";

/**
 * business-slug service.
 */

module.exports = () => ({
  getBySlug: async ({ slug }) => {
    try {
      return await strapi.db.query("api::business.business").findOne({
        select: [
          // "id",
          "name",
          // "description",
          // "slug",
          "logo",
          "email",
          "contactInfo",
        ],
        where: { slug },
        populate: {
          configuration: {
            select: ["isRange", "avoidWeekends", "showHours"],
          },
          businessType: {
            select: ["name", "description"],
          },
        },
      });
    } catch (error) {
      return error;
    }
  },
});
