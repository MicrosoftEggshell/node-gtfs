const model = {
  filenameBase: 'calendar_dates',
  schema: [
    {
      name: 'service_id',
      type: 'text',
      required: true,
      primary: true,
      prefix: true,
    },
    {
      name: 'date',
      type: 'integer',
      required: true,
      primary: true,
    },
    {
      name: 'exception_type',
      type: 'integer',
      required: true,
      min: 1,
      max: 2,
      index: true,
    },
    {
      name: 'holiday_name',
      type: 'text',
      nocase: true,
    },
  ],
};

export default model;
