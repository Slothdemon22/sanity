import { defineType, defineField } from "sanity";





export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Author Name",
            type: "string",
        }),
        defineField({
           name:'bio',
            type: 'text',
           title: 'Bio',
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
});