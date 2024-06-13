const model = {
  filenameBase: 'fare_media',
  schema: [
    {
      name: 'fare_media_id',
      type: 'text',
      required: true,
      primary: true,
      prefix: true,
    },
    {
      name: 'fare_media_name',
      type: 'text',
    },
    {
      name: 'fare_media_type',
      type: 'integer',
      required: true,
      min: 0,
      max: 4,
    },
  ],
};

export default model;
