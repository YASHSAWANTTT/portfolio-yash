// import {defineField, defineType} from 'sanity'
export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Titile of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "progress of skill 0 to 100",
      //validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    
  ],
};
