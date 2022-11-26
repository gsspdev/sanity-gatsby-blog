export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6382a5b78f98a17039c6bffb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ux52cnky",
                  apiId: "3371d9d6-220d-4a22-963e-3100cba63e2f",
                },
                {
                  buildHookId: "6382a5b8a69c5503a5656485",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2eq5a2sx",
                  apiId: "2872ccbc-3b80-4761-b972-e48abfe8b672",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gsspdev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2eq5a2sx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
