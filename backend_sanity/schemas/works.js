export default {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "tags",
      title: "Tags",
      type: "tags",
      options: {
        //Locks menu from creating new tags (defaults to false)
        frozen: false,
        //Preset of tags (defaults to empty)
        preload: [
          { label: "Oranges", value: "oranges" },
          { label: "Apples", value: "apples" },
        ],
        //Closes menu after tag selected (defaults to true)
        closeMenuOnSelect: false,
      },
    },
  ],
}
