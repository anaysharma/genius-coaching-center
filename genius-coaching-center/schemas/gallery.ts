export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
  ],
};