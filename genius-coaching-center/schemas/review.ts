export default {
  name: "reviews",
  type: 'document',
  title: "Reviews",
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Reviewer Name'
    },
    {
      name: 'profile',
      type: 'image',
      title: 'Reviewer Picture'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Reviewer Email'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Review Title'
    },
    {
      name: 'content',
      title: 'Review Content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}