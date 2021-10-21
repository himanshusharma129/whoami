module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    stack: {
      type: 'json',
      required: true
    },
    git: {
      type: 'string'
    },
    category: {
      type: 'string',
      required: true
    },
    iconLink: {
      type: 'string'
    },
    type: {
      type: 'string'
    }
  }
};

