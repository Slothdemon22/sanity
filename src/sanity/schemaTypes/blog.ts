import {defineArrayMember, defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'Blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField ({
          name: 'title',
          type: 'string', //for short input
          title: 'Blog Title',
          validation: (Rule) => Rule.max(10).error("Less than 10"),

      }),
      defineField({
          name:"Gender",
          type: "string",
          title: "Gender",
          options: {
              list: [
                  {title: "Male", value: "male"},
                  {title: "Female", value: "female"},
                  {title: "Other", value: "other"},
              ],
              layout: "radio",
              direction: "horizontal"
          },
         
          validation: (Rule) => Rule.required().error("Gender is required"),

      }),
      defineField({
          name: 'description',
          type: 'string',
          title: 'Blog Description',
          validation: (Rule) => Rule.required().error("Blog Description is required"),
      }),
      defineField({
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          options: {
              source: "title",
              maxLength: 96
          },
          validation: (Rule) => Rule.required().error("Slug is required"),
      }),
      defineField({
          name: 'Summary',
          type: 'text',
          title: 'Summary',
          validation: (Rule) => Rule.required().error("Summary is required"),
      }),
      defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
         
          validation: (Rule) => Rule.required().error("Image is required"),
      }),
      defineField({
          name: "content",
          type: "array",
          title: "Content",
          of: [
              defineArrayMember({
                  type:"block",
              })
          ]
      }),
      defineField({
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: [
              {
                  type: 'author'
              }
          ]
      })

    ],
  
})