import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'content/posts/**/*.mdx', // Ensure this matches your folder structure
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false }, // Ensure correct type for 'tags'
  },
}))

export default makeSource({
  contentDirPath: 'apps/frontend', // Ensure this points to the correct content directory
  documentTypes: [BlogPost],
})
