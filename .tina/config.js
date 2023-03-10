import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "295ce528-b6fb-4955-adbe-7ec75d30abfd", // Get this from tina.io
  token: "27f7bccc2be696ba357a5510bdc8171d708d64b1", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "blog",
        label: "Blogs",
        path: "content/blogs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },

          {
            type: "datetime",
            name: "date",
            label: "Date",
            // ui: {
            //   timeFormat: "HH:mm"
            // },
            isDate:true,
            required:true,
          },

          {
            type: 'image',
            label: 'Cover Image',
            name: 'coverImage',
            isImage:true,
            required:true,
          },
          {
            type: 'image',
            label: 'Thumbnail Image',
            name: 'thumbnailImage',
            isThumbnail:true,
            required:true,
          },
        
          {
            type: "string",
            name: "tag",
            label: "Tag",
            isTag: true,
            required: true,
          },

          {
            type: "string",
            name: "summary",
            label: "Summary",
            isSummary: true,
            required: true,
          
          ui: {
            component: "textarea"
          }
          },
          
          
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isDescription: true,
            required:true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
