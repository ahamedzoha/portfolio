export default {
  name: "recommendations",
  title: "Recommendations",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "string",
    },

    {
      name: "imageurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
