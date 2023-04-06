export default {
  name: 'carousel',
  type: 'document',
  title: 'Carousel',
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
        },
      ],
    },
  ],
};