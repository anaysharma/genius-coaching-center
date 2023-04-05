export default {
  name: "news",
  type: 'document',
  title: "News",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'News Title'
    },{
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}