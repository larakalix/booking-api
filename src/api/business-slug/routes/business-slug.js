module.exports = {
  routes: [
    {
      method: "GET",
      path: "/business-slug/:slug",
      handler: "business-slug.getBusinessBySlug",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
